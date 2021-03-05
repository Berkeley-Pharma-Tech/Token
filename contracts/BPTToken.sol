pragma solidity >= 0.7.4;

//SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";



contract BPTToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("BPTToken", "BPT") {
        _mint(msg.sender, initialSupply);
    }
}