const config = require('./config');
const scriptUtils = require('./utils');

const tempDirName = './temp';
const tempServerDirName = './temp/server/';
const s3bucket = config.s3.distributionsBucket;
let envName, appName;

(async function run() {
    try {
        const environmentName = process.argv[2];
        if (environmentName !== 'production' && environmentName !== 'staging') throw new Error("Need to provide argument for the environment: staging or production");
        console.log('deploying the backend to elastic beanstalk');
        if (environmentName === 'production') {
            envName = config.eb.envName.production;
            appName = config.eb.appName.production;
        } else if (environmentName === 'staging') {
            envName = config.eb.envName.staging;
            appName = config.eb.appName.staging;
        }
        await deployBackend(environmentName);
        console.log("finished");
    } catch(error) {
        console.log(error);
        process.exit(1);
    }
    process.exit(0);
})();

async function deployBackend(environmentName) {
    console.log('This script will deploy the latest in the /server directory to the backend application');
    console.log('Please make sure there is no files in the working directory (responsibly do a `git stash` if you are unsure)');

    await scriptUtils.pressEnterToContinue();

    console.log();
    console.log('(1/5) getting Git branch and commit info');
    const gitInfo = await scriptUtils.getGitCommit();
    console.log(gitInfo);

    scriptUtils.checkGitBranch(gitInfo.branch, environmentName);

    console.log();
    console.log('(2/5) creating distribution package from server/');
    const versonName = 'server_' + gitInfo.commit + '_' + environmentName;
    await scriptUtils.createTempServerDir(tempServerDirName, environmentName);
    await scriptUtils.addServerVersion(tempServerDirName, versonName);
    const zipFileName = await scriptUtils.zipServerDir(tempDirName, tempServerDirName, versonName);

    console.log(zipFileName);
    console.log('(3/5) uploading the environment version (distribution) to S3');
    await scriptUtils.pressEnterToContinue();
    let distributionS3File = await scriptUtils.uploadZipfileToS3(envName, s3bucket, zipFileName);
    console.log(distributionS3File);

    console.log();
    console.log('(4/5) creating a new application version');
    await scriptUtils.pressEnterToContinue();
    await scriptUtils.addElasticEnvironmentVersion(s3bucket, appName, zipFileName, distributionS3File);

    console.log();
    console.log('(5/5) updating the elastic beanstalk environment');
    await scriptUtils.pressEnterToContinue();
    const ebUpdate = await scriptUtils.updateElisticEnvironment(appName, envName, zipFileName);
    console.log(ebUpdate);
}