const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../../server');
const userHelpers = require('../usersHelpers')
const candidateWizardHelpers = require('./wizard/candidateWizardHelpers')

const should = chai.should();

chai.use(chaiHttp);


const signupCandidate = module.exports.signupCandidate = async function signupCandidate(candidate) {
    const res = await chai.request(server)
        .post('/users/register')
        .send(candidate);
    res.should.have.status(200);
    return res;
}

const signupAdminCandidate = module.exports.signupAdminCandidate = async function signupAdminCandidate(candidate) {
    await signupCandidate(candidate);
    await userHelpers.makeAdmin(candidate.email);
}

module.exports.signupVerfiedCandidate = async function signupVerfiedCandidate(candidate) {
    await signupCandidate(candidate);
    await userHelpers.verifyEmail(candidate.email);
}

module.exports.signupVerifiedApprovedCandidate = async function signupVerifiedApprovedCandidate(candidate) {
    await signupCandidate(candidate);
    await userHelpers.verifyEmail(candidate.email);
    await userHelpers.approve(candidate.email);
    await userHelpers.makeAdmin(candidate.email);
}

module.exports.signupCandidateAndCompleteProfile = async function signupCandidateAndCompleteProfile(candidate, about, job,resume,experience) {
    const res = await signupCandidate(candidate);
    await userHelpers.verifyEmail(candidate.email);
    await userHelpers.approve(candidate.email);
    await candidateWizardHelpers.about(about, res.body.jwt_token);
    await candidateWizardHelpers.job(job, res.body.jwt_token);
    await candidateWizardHelpers.resume(resume, res.body.jwt_token);
    await candidateWizardHelpers.experience(experience, res.body.jwt_token);
}

const getAll = module.exports.getAll = async function getAll(jwtToken) {
    const res = await chai.request(server)
        .get('/users/')
        .set('Authorization', jwtToken)
        .send();
    res.should.have.status(200);
    return res;
}

const getCurrentCandidateInfo = module.exports.getCurrentCandidateInfo = async function getCurrentCandidateInfo(id,jwtToken) {
    const res = await chai.request(server)
        .get('/users/current/'+id)
        .set('Authorization', jwtToken)
        .send();
    res.should.have.status(200);
    return res;
}

