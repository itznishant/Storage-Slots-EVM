const hre = require("hardhat");
const { keccak256, hexZeroPad } = hre.ethers.utils;

const CONTRACT_ADDRESS = ""; //ENTER SMART CONTRACT ADDRESS HERE E.G. 0x0

const TOKEN_ID = 1001; //ENTER ERC721 NFT TOKEN-ID E.G. 1001

//ENTER BASE SLOT OF THE TOKEN OWNERS MAPPING , THIS IS DIFFERENT FOR EACH CONTRACT
const BASE_SLOT_ADDRESS = "";

async function getInfo() {
  //DISPLAY ENTERED DETAILS
  console.log("\n");
  console.log("################################  " + "ENTERED DETAILS" + "  ################################\n");
  console.log("CONTRACT ADDRESS (NFT): ", CONTRACT_ADDRESS);
  console.log("NFT TOKEN ID: ", TOKEN_ID.toString());

  const KEY = hexZeroPad(TOKEN_ID, 32);

  const BASE_SLOT = hexZeroPad(BASE_SLOT_ADDRESS, 32).slice(2);

  console.log("KEY: ", KEY);
  console.log("BASE_SLOT: ", BASE_SLOT);

  const STORAGE_SLOT = keccak256(KEY + BASE_SLOT); //ACTUAL DATA IS STORED IN STORAGE_SLOT

  console.log("STORAGE SLOT: ", STORAGE_SLOT);

  const VALUE = await hre.ethers.provider.getStorageAt(CONTRACT_ADDRESS, STORAGE_SLOT);   //getStorageAt LOOKUP

  //DISPLAYS VALUE STORED AT STORAGE_SLOT i.e. TOKEN OWNER ADDRESS!
  console.log("VALUE (TOKEN OWNER ADDRESS): ", (await VALUE).toString());
}

getInfo().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
