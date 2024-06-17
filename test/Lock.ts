import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Simmple test", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployOneYearLockFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    // const Token = await ethers.getContractFactory("Token");
    // const token = await Token.deploy(ethers.utils.parseEther("500000000"));

    // return { token };
  }

  describe("Deployment", function () {
    it("Should set the right unlockTime", async function () {
      /**const {  } = */ await loadFixture(deployOneYearLockFixture);

      expect(1).to.equal(1);
    });
  });
});
