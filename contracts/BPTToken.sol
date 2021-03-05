pragma solidity >= 0.7.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";



contract BPTToken is ERC20 {
    uint256 constant initSupply = 1000000000;
    
    constructor() ERC20("BPTToken", "BPT") {
        _mint(msg.sender, initSupply);
    }
}