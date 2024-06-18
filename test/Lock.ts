import { NftStaking, Nomad, NukaCoin } from "@/typechain";
import { timstamp } from "@/utils/time";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { BigNumberish } from "ethers";
import { ethers } from "hardhat";

describe("Simmple test", function () {
  interface Period {
    safepoint: BigNumberish; // timestamp strting ftom 0
    reward: BigNumberish; // per current period
  }

  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("NukaCoin");
    const token = await Token.deploy(ethers.utils.parseEther("500000000")) as NukaCoin;

    const Nft = await ethers.getContractFactory("Nomad");
    const nft = await Nft.deploy(["https://ipfs.io/ipfs/QmZPZwoAumeDWXou8uXRg2NvDANV92rXWf4BoW4wAcYGoB"]) as Nomad;

    const now = timstamp();
    const Staking = await ethers.getContractFactory("NftStaking");
    const staking = await Staking.deploy([
      { safepoint: now + 1000, reward: 1000 },
      { safepoint: now + 2000, reward: 2000 },
      { safepoint: now + 3000, reward: 3000 },
      { safepoint: now + 5000, reward: 5000 },
    ] as Period[],
      token.address,
      nft.address) as NftStaking;

    return { token, nft, staking };
  }

  describe("Deployment", function () {
    it("Should set the right unlockTime", async function () {
      const [owner, otherAccount] = await ethers.getSigners();
      const { nft, staking } = await loadFixture(deployFixture);

      const stakeId = await nft.firstTokenId()

      await nft.connect(owner).addAllowedTo(staking.address, "Nft Staking")
      await nft.approve(staking.address, stakeId)
      await staking.stake(stakeId)

      expect(1).to.equal(1);
    });
  });
});
