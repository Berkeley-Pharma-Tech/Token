const BPTToken = artifacts.require('BPTToken');
const BPTTokenSale = artifacts.require("BPTTokenSale");

module.exports = async function (deployer) {
  await deployer.deploy(BPTToken,'BPTToken', 'BPT', '1000000000');
  const token = await BPTToken.deployed();

  const testAccount = "0x4f6B17F9ab25070505535402fa48038Cb92F6c91"
  await deployer.deploy(BPTTokenSale, 1, testAccount, token.address);

  const crowdsale = await BPTTokenSale.deployed();
  token.tansfer(crowdsale.address, await token.totalSupply())
};
