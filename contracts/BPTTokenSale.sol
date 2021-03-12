pragma solidity >= 0.7.4;

//SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/crowdsale/Crowdsale.sol";

new Crowdsale(
    1,             // rate in TKNbits
    0x4f6B17F9ab25070505535402fa48038Cb92F6c91,     // address where Ether is sent
    0xdb469978077f63daf91690a3f436e4102a510e2e  // the token contract address
);

contract BPTTokenCrowsale    is Crowdsale {
    constructor(
        uint256 rate,
        address payable wallet,
        IERC20 token
    ) public Crowdsale(rate, wallet, token) {}
}