// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Nomad is ERC721URIStorage, Ownable {
    uint public lastTokenId;

    // to watch through all allowed addresses
    event NewAllowedTo(address indexed addr, string message);
    event NewAllowedFrom(address indexed addr, string message);

    mapping(address => bool) allowedTo;
    mapping(address => bool) allowedFrom;

    constructor(
        string[] memory tokenURIs
    ) ERC721("Nomad", "NoFT") Ownable(msg.sender) {
        // mint/burn of this NFT is allowed by default
        allowedTo[address(0)] = true;
        allowedFrom[address(0)] = true;

        for (uint i; i < tokenURIs.length; ++i)
            mintNFT(msg.sender, tokenURIs[i]);
    }

    /**
     *
     * @param recipient - user who will recieve erc721 token
     * @param tokenURI - picture for metamask
     * @dev we can mint only NFTs with id eq to the earliest id + 1
     */
    function mintNFT(
        address recipient,
        string memory tokenURI
    ) public onlyOwner returns (uint256) {
        // to make firts NFT id eq 1 not 0
        lastTokenId++;

        uint256 newItemId = lastTokenId;
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

    ///////////////////////
    ////// OVERLOADS //////

    /**
     *
     * @param to - person who will recieve NFT
     * @param tokenId - unique identifier
     * @param auth - from whom token will be taken from
     * @notice allowed ONLY mint/burn of this ERC721 token
     * or transfer to/from allowed addresses
     */
    function _update(
        address to,
        uint256 tokenId,
        address auth
    ) internal virtual override returns (address) {
        require(
            allowedTo[to] || allowedFrom[auth],
            "You are not allowed to transfer or the reciever is not allowed to get this ERC721!"
        );

        return super._update(to, tokenId, auth);
    }

    ////////////////////////////////
    ////// CONVENIENT SETTERS //////

    function addAllowedFrom(
        address newOne,
        string memory message
    ) external onlyOwner {
        allowedFrom[newOne] = true;
        emit NewAllowedFrom(newOne, message);
    }

    function addAllowedTo(
        address newOne,
        string memory message
    ) external onlyOwner {
        allowedTo[newOne] = true;
        emit NewAllowedTo(newOne, message);
    }

    function removeAllowedFrom(address toRemove) external onlyOwner {
        require(toRemove != address(0), "Cannot remove zero address!");
        allowedFrom[toRemove] = false;
    }

    function removeAllowedTo(address toRemove) external onlyOwner {
        require(toRemove != address(0), "Cannot remove zero address!");
        allowedTo[toRemove] = false;
    }

    ////////////////////////////////
    ////// CONVENIENT GETTERS //////

    function firstTokenId() external pure returns (uint8) {
        return 1;
    }
}
