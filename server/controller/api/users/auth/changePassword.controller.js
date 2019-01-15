const users = require('../../../../model/mongoose/users');
const crypto = require('crypto');
const errors = require('../../../services/errors');

module.exports = async function (req,res)
{
    let userId = req.auth.user._id;
    const userDoc = await users.findOneById( userId );
    if(userDoc) {
        let queryBody = req.body;
        let hash = crypto.createHmac('sha512', userDoc.salt);
        hash.update(queryBody.current_password);
        let hashedPasswordAndSalt = hash.digest('hex');

        if (hashedPasswordAndSalt === userDoc.password_hash)
        {
            let salt = crypto.randomBytes(16).toString('base64');
            let hash = crypto.createHmac('sha512', salt);
            hash.update(queryBody.password);
            let hashedPasswordAndSalt = hash.digest('hex');
            await users.update({ _id: userId },{ $set: {'password_hash': hashedPasswordAndSalt, 'salt' : salt } });
            res.send({
                success : true
            })
        }
        else
        {
            errors.throwError("Current password is incorrect", 400);
        }
    }
    else {
        errors.throwError("User not found", 404);

    }

}