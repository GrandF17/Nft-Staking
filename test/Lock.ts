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

    const Pac = await ethers.getContractFactory("PAC");
    const pac = await Pac.deploy(ethers.utils.parseEther("500000000"));

    return { pac, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right unlockTime", async function () {
      const { pac } = await loadFixture(deployOneYearLockFixture);
      console.log(pac.address);

      expect(1).to.equal(1);
    });
  });
});
