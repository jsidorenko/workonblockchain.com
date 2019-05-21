const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const regexes = require('../../../../model/regexes');
const crypto = require('../../../services/crypto');
const jwtToken = require('../../../services/jwtToken');
const users = require('../../../../model/mongoose/users');
const companies = require('../../../../model/mongoose/company');
const errors = require('../../../services/errors');
const google = require('../../../services/google');
const linkedin = require('../../../services/linkedin');
const objects = require('../../../services/objects');
const logger = require('../../../services/logger');
const auth = require('../../../middleware/auth-v2');

module.exports.request = {
    type: 'delete',
    path: '/users/auth/'
};

const querySchema = new Schema({
    name: String
})

module.exports.inputValidation = {
    query: querySchema
};

module.exports.auth = async function (req) {
    await auth.isValidUser(req);
}

module.exports.endpoint = async function (req, res) {
    console.log('in ftn');
    let userId = req.auth.user._id;
    await users.update({ _id: userId},{ $unset: {'jwt_token': 1} });
    res.send({
        success :true
    })
}