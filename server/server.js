const rootpath = require('rootpath');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const settings = require('./settings');
const logger = require('./controller/services/logger');
const zoho = require('./controller/services/zoho/zoho');
const sanitizer = require('./controller/middleware/sanitizer');
const requestLogger = require('./controller/middleware/requestLogger');
const errorHandler = require('./controller/middleware/errorHandler');
const routesV2 = require('./routes-v2');
const cron = require('./cron');

let app = express();

module.exports = app;

try {
    rootpath();

    app.use(cors());

    app.use(helmet());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.use("/users",sanitizer.middleware);

    app.use(routesV2);
    app.use(requestLogger);

    app.use(errorHandler);

    cron.startCron();

    if (settings.isLiveApplication()) {
        zoho.initialize();
    }

    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useUnifiedTopology', true);
    mongoose.connect(settings.MONGO_CONNECTION_STRING);

    mongoose.connection.on('connected',function () {
        logger.info('Connected to mongodb database');
    });

    mongoose.connection.on('error', function (error) {
        if (error) {
            logger.error(error.message, {stack: error.stack});
            process.exit(1);
        }
    });

    const port = settings.SERVER.PORT;

    app.listen(port, function () {
        logger.info('Server listening on port ' + port);
    });
} catch(error) {
    logger.error(error.message, {
        stack: error.stack,
        name: error.name
    });
}