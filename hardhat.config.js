require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "localhost",
  networks: {
    eth_mainnet: {
      url: process.env.ETHEREUM_MAINNET_RPC_URL,
      accounts: [process.env.YOUR_PRIVATE_KEY_HERE]
    }
  }
};
