// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { run, network } = require("hardhat")
const hre = require("hardhat")

async function main() {
    const Diary = await hre.ethers.getContractFactory("diary")
    console.log("getting artifcats....")
    const diary = await Diary.deploy()

    await diary.deployed()

    console.log("Diary is deployed to this", diary.address)
}
//     if (network.config.chainId === 4 && process.env.Etherscan_APIkey) {
//         await diary.deployTransaction.wait(6)
//         await verify(diary.address, [])
//     }
// }

// async function verify(contractAddress, args) {
//     console.log("verifying...")
//     try {
//         await run("verify:verify", {
//             address: contractAddress,
//             constructorArguments: args,
//         })
//     } catch (error) {
//         if (error.message.toLowerCase().includes("already verified")) {
//             console.log("Already Verified!")
//         } else {
//             console.log(error)
//         }
//     }
// }

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
