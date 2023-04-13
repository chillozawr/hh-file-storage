const API_KEY = process.env.ALCHEMY_API_KEY_POLYGON;
const PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.DEPLOYED_CONTRACT_ADDRESS_POLYGON;

const { ethers, network } = require("hardhat");
const contract = require("../artifacts/contracts/FileStorage.sol/FileStorage.json");

console.log(JSON.stringify(contract.abi));

const alchemyProvider = new ethers.providers.AlchemyProvider(
  "polygon_mumbai",
  API_KEY
);

const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

const fileStorageContract = new ethers.Contract(
  CONTRACT_ADDRESS,
  contract.abi,
  signer
);

async function main() {
  //   const message = await fileStorageContract.message();
  console.log("Something happening...");
}

main();
