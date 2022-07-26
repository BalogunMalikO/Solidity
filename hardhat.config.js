require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")

/** @type import('hardhat/config').HardhatUserConfig */

const Rinkeby_RPC_url = process.env.Rinkeby_RPC_url
const private_Key = process.env.Private_Key
const Etherscan_APIkey = process.env.Etherscan_APIkey

module.exports = {
    networks: {
        rinkeby: {
            url: Rinkeby_RPC_url,
            accounts: [private_Key],
            chainId: 4,
        },
    },
    solidity: "0.8.9",
    etherscan: {
        apikey: {
            rinkeby: Etherscan_APIkey,
        },
    },
}
