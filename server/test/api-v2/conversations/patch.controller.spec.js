const chai = require('chai');
const chaiHttp = require('chai-http');
const mongo = require('../../helpers/mongo');
const messagesHelpers = require('../helpers');
const docGenerator = require('../../helpers/docGenerator');
const companyHelper = require('../../api/users/company/companyHelpers');
const candidateHelper = require('../../api/users/candidate/candidateHelpers');
const docGeneratorV2 = require('../../helpers/docGenerator-v2');
const users = require('../../../model/mongoose/users');

chai.use(chaiHttp);

describe('PATCH /conversations/:sender_id/messages/', function () {
    afterEach(async () => {
        console.log('dropping database');
        await mongo.drop();
    });

    describe('updating conversations', function () {

        it('it should update unread count', async function () {
            const company = docGenerator.company();
            await companyHelper.signupVerifiedApprovedCompany(company);
            const companyUserDoc = await users.findOneByEmail(company.email);

            const candidate = docGenerator.candidate();
            await candidateHelper.signupVerifiedApprovedCandidate(candidate);
            const candidateuserDoc = await users.findOneByEmail(candidate.email);

            const jobOffer = docGeneratorV2.messages.job_offer(candidateuserDoc._id);
            await messagesHelpers.post(jobOffer, companyUserDoc.jwt_token);

            const res = await messagesHelpers.patch(companyUserDoc._id, candidateuserDoc.jwt_token);
            res.body.should.equal(true);
        })
    });
});