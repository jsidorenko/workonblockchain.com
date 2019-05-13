const auth = require('../../middleware/auth-v2');
const Schema = require('mongoose').Schema;
const errors = require('../../services/errors');
const sanitizer = require('../../services/sanitize');
const emailTemplates = require('../../../model/mongoose/email_templates');
const objects = require('../../services/objects');

module.exports.request = {
    type: 'patch',
    path: '/email_templates'
};

const querySchema = new Schema({
    admin: Boolean,
});

const bodySchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    subject:{
        type:String,
    },
    body: {
        type:String,
        required:true,
    }
});

module.exports.inputValidation = {
    query: querySchema,
    body: bodySchema
};

module.exports.auth = async function (req) {
    await auth.isAdmin(req);
    if(!req.query.admin) throw new Error("User is not an admin");
}


module.exports.endpoint = async function (req, res) {
    let queryBody = req.body;
    let userId = req.auth.user._id;
    let timestamp = new Date();
    let unset = {};
    const sanitizedBody = sanitizer.sanitizeHtml(req.unsanitizedBody.body, true);
    const emailTemplateDoc = await emailTemplates.findOne({name: queryBody.name});

    if(emailTemplateDoc) {
        let updateTemplate = {
            body: sanitizedBody,
            updated_by: userId,
            updated_date: timestamp
        };
        if(queryBody.subject) updateTemplate.subject = queryBody.subject;
        else unset.subject = 1;

        let updateObj = {};
        if(!objects.isEmpty(updateTemplate)) updateObj.$set = updateTemplate;
        if(!objects.isEmpty(unset)) updateObj.$unset = unset;

        await emailTemplates.update({_id: emailTemplateDoc._id}, updateObj);
        res.send(true);
    }
    else {
        errors.throwError("Template doc not found", 404);
    }
}