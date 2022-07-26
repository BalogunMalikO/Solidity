const { ethers } = require("hardhat")
const { expect, assert } = require("chai", "hardhat")
// decribe fuction takes a string and an annonymous function
describe("diary", function () {
    let diaryfactory, diaryFactory

    beforeEach(async function () {
        diaryfactory = await ethers.getContractFactory("diary")

        diaryFactory = await diaryfactory.deploy()
    })
})

it("it should write to the contract", async function () {
    const storedData = ("hello my name is malik and this is my diary", 23)
    const transactionResponse = await diaryFactory.writeContent(storedData)
    await transactionResponse.wait(1)

    assert.equal(storedData.tostring(), storedData)
})
