const { Land } = require('./database/model/Land.js'); 

// Function to fetch all records from the Land table
async function fetchAllLandRecords() {
  try {
    // Fetch all records
    const landRecords = await Land.findAll();
    
    // Log the fetched records
    console.log('Fetched Land Records:', landRecords);
  } catch (error) {
    console.error('Error fetching Land records:', error);
  }
}

// Call the function to fetch land records
fetchAllLandRecords();
