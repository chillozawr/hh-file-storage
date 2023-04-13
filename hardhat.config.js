require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    goerli: {
      chainId: 5,
      url: process.env.GOERLI_RPC_URL,
      accounts: [`0x${process.env.GOERLI_PRIVATE_KEY}`],
    },
    polygon_mumbai: {
      url: process.env.POLYGON_RPC_URL,
      accounts: [`0x${process.env.GOERLI_PRIVATE_KEY}`],
    },

    // localganache: {
    //   url: process.env.GANACHE_RPC_URL,
    //   accounts: [`0x${process.env.GANACHE_PRIVATE_KEY}`],
    // },
  },
  solidity: "0.8.17",
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY,
  },
};
