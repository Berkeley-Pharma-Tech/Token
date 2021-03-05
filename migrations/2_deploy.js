const BPTToken = artifacts.require('BPTToken');

module.exports = async function (deployer) {
  await deployer.deploy(BPTToken, '1000000000');
};
