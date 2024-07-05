const express = require('express')
const path = require('path')
const {open} = require{sqlite}
const sqlite3 = require(sqlite3)
const app = express
const dbPath = path.join(__dirname,"havahavai.db")
let db = null;
const initializeDBAndServer = async () => {
    try{
        db = await open({
            filename: dbPath,
            driver: sqlite3.Database,
        })
        app.listen(3000, () => {
            console.log("Server is running at http://localhost:3000")
        });
    }catch(e){
        console.log(`DB Error: ${e.message}`)
        process.exit(1)
    }
};
initializeDBAndServer();

//GetDetails
app.get("iata_code/", async(request,response) => {
    const iata_code = request.params
    const getAirportDetails = `SELECT * FROM Airport.ts City.ts Country.ts WHERE id = iata_code`
    const fullDetails = await db.all(getAirportDetails);
    response.send(fullDetails)
});
app();