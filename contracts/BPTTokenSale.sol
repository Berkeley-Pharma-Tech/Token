pragma solidity >= 0.7.4;

//SPDX-License-Identifier: MIT

import "./crowdsale/Crowdsale.sol";

contract BPTTokenSale is Crowdsale {
    constructor(
        uint256 rate,
        address payable wallet,
        IERC20 token
    ) Crowdsale(rate, wallet, token) {}
}