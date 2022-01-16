// IMPORTING THE GET-DB FUNCTION
// THIS FUNCTION RETURNS A REFERENCE TO THE DB
const {getDatabase} = require('./mongo');

const collectionName = 'ads';

// DEFINING THE INSERT-AD FUNCTION
async function insertAd(ad) {
  const database = await getDatabase();
  const {insertedId} = await database.collection(collectionName).insertOne(ad);
  return insertedId;
}

// DEFINING THE GET-AD FUNCTION
async function getAds() {
  const database = await getDatabase();
  return await database.collection(collectionName).find({}).toArray();
}

// EXPORTING 2 FUNCTIONS FOR WORKING WITH ADS
module.exports = {
  insertAd, // INSERTS AN AD INTO THE DB
  getAds, // RETRIEVES ALL RECORDS
};





