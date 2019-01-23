const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const asyncMiddleware = require('./controller/middleware/asyncMiddleware');
const sanitizer = require('./controller/middleware/sanitizer');

const endpoints = [
    require('./controller/api-v2/messages/post.controller'),
    require('./controller/api-v2/messages/get.controller'),
    require('./controller/api-v2/conversations/get.controller'),
    require('./controller/api-v2/conversations/messages/get.controller'),
    require('./controller/api-v2/conversations/patch.controller')
];

/*function isEmpty(obj) {
    for(let key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}*/

function isEmpty(obj) {
    for(let prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
            return false;
        }
    }
    return true;
}

function files(files) {
    if (files)
    {
        return function (req, res, next) {
            Promise.resolve(files(req, res, next)).catch(next).then(next);
        }
    }

}

const validateInputs = function(request, inputSchemas) {
    console.log('in validating inputs');
    const validationTypes = ['query', 'params', 'body'];
    const modelName = request.type.toUpperCase() + request.path;
    const models = {
        'query': inputSchemas.query ? mongoose.model(modelName + "-query", inputSchemas.query) : null,
        'params': inputSchemas.params ? mongoose.model(modelName + "-params", inputSchemas.params) : null,
        'body': inputSchemas.body ? mongoose.model(modelName + "-body", inputSchemas.body) : null
    };

    return function (req) {
        for (const type of validationTypes) {
            const input = req[type];
            if (input && !isEmpty(input)) {
                console.log('validating ' + type, input);
                const doc = new models[type](input);
                const error = doc.validateSync();
                if (error) throw new Error(error);
            }
        }
    }
};

const register = function(endpoint) {
    const path = '/v2' + endpoint.request.path;
    router[endpoint.request.type](path,
        sanitizer.middleware,
        asyncMiddleware.thenNext(validateInputs(endpoint.request, endpoint.inputValidation)),
        asyncMiddleware.thenNext(endpoint.auth),
        asyncMiddleware(endpoint.endpoint),
        asyncMiddleware.thenNext(files(endpoint.files))
    );
};

const registerEndpoint = function() {
    for (const endpoint of endpoints) {
        register(endpoint);
    }
};

registerEndpoint();
module.exports = router;