// scripts/index.js
module.exports = async function main(callback) {
    try {
        // Our code will go here
        const accounts = await web3.eth.getAccounts();
        console.log(accounts)
        const BPToken = artifacts.require("BPTToken");
        const BPT = await BPToken.deployed();
        const totalSupply = (await BPT.totalSupply()).toString()
        console.log('total supply: ', totalSupply);
        callback(0);
    } catch (error) {
        console.error(error);
        callback(1);
    }
}