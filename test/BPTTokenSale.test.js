// test/SimpleCrowdsale.test.js
// SPDX-License-Identifier: MIT

// Based on https://github.com/OpenZeppelin/openzeppelin-solidity/blob/v2.5.1/test/examples/SimpleToken.test.js

const { expect } = require('chai');

// Import utilities from Test Helpers
const { BN, ether, expectEvent, expectRevert, constants } = require('@openzeppelin/test-helpers');

// Load compiled artifacts
const BPTToken = artifacts.require('BPTToken');
const BPTTokenSale = artifacts.require('BPTTokenSale');

// Start test block
contract('BPTTokenSale', function ([ creator, investor, wallet ]) {

  const NAME = 'BPTToken';
  const SYMBOL = 'Token';
  const TOTAL_SUPPLY = new BN('10000000000000000000000');
  const RATE = new BN(10);

  beforeEach(async function () {
    this.token = await BPTToken.new(NAME, SYMBOL, TOTAL_SUPPLY, { from: creator });
    this.crowdsale = await BPTTokenSale.new(RATE, wallet, this.token.address);
    this.token.transfer(this.crowdsale.address, await this.token.totalSupply());
  });

  it('should create crowdsale with correct parameters', async function () {
    expect(await this.crowdsale.rate()).to.be.bignumber.equal(RATE);
    expect(await this.crowdsale.wallet()).to.be.equal(wallet);
    expect(await this.crowdsale.token()).to.be.equal(this.token.address);
  });

  it('should accept payments', async function () {
    const investmentAmount = ether('1');
    const expectedTokenAmount = RATE.mul(investmentAmount);

    await this.crowdsale.buyTokens(investor, { value: investmentAmount, from: investor });

    expect(await this.token.balanceOf(investor)).to.be.bignumber.equal(expectedTokenAmount);
  });
});