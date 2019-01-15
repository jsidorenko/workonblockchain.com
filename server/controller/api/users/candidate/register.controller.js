const users = require('../../../../model/mongoose/users');
const crypto = require('crypto');
const jwtToken = require('../../../services/jwtToken');
const referral = require('../../../../model/mongoose/referral');
const errors = require('../../../services/errors');

///////to create new candidate////////////////////////////

module.exports = async function (req, res) {

    let userParam = req.body;

    if(userParam.linkedin_id) {
        const candidateUserDoc = await users.findOne({ linkedin_id: userParam.linkedin_id });
        if (candidateUserDoc) {
            let errorMsg = 'Email "' + userParam.email + '" is already taken';
            errors.throwError(errorMsg , 400)
        }
    }
    const userDoc = await users.findOneByEmail(userParam.email);
    if (userDoc )
    {
        let errorMsg = 'Email "' + userParam.email + '" is already taken';
        errors.throwError(errorMsg , 400)
    }

    let is_verify=0;
    if(userParam.social_type === 'GOOGLE' || userParam.social_type === 'LINKEDIN')
    {
        is_verify = 1;
    }

    let salt = crypto.randomBytes(16).toString('base64');
    let hash = crypto.createHmac('sha512', salt);
    hash.update(userParam.password);
    let hashedPasswordAndSalt = hash.digest('hex');
    let newUserDoc = {
        email: userParam.email,
        password_hash: hashedPasswordAndSalt,
        salt : salt,
        type: userParam.type,
        social_type: userParam.social_type,
        is_verify:is_verify,
        created_date: new Date(),
        referred_email : userParam.referred_email,
        linkedin_id : userParam.linkedin_id,
        candidate: {
            status: [{
                status: 'created',
                status_updated: new Date(),
                timestamp: new Date()
            }]
        }
    }
    const candidateUserCreated = await users.insert(newUserDoc);

    let url_token;

    if(candidateUserCreated) {
        let jwtUserToken = jwtToken.createJwtToken(candidateUserCreated);
        await users.update({_id: candidateUserCreated._id}, {$set: {'jwt_token': jwtUserToken}});
        const referralDoc = await referral.findOneByEmail( userParam.email );
        if(referralDoc) {
            url_token = referralDoc.url_token;
        }
        else {
            let new_salt = crypto.randomBytes(16).toString('base64');
            let new_hash = crypto.createHmac('sha512', new_salt);
            url_token = new_hash.digest('hex');
            url_token = url_token.substr(url_token.length - 10);

            let document = {
                email : userParam.email,
                url_token : url_token,
                date_created: new Date(),
            };
            referral.insert(document);
        }

        res.send
        ({
            _id: candidateUserCreated._id,
            _creator : candidateUserCreated._id, // remove this after chat refactor
            type:candidateUserCreated.type,
            email: candidateUserCreated.email,
            ref_link: url_token,
            is_approved : candidateUserCreated.is_approved,
            jwt_token: jwtUserToken
        });

    }



}

