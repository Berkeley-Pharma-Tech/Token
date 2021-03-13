pragma solidity >= 0.5.5;

//SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/crowdsale/Crowdsale.sol";

contract BPTTokenSale is Crowdsale {
    constructor(
        uint256 rate,
        address payable wallet,
        IERC20 token
    ) public Crowdsale(rate, wallet, token) {}
}