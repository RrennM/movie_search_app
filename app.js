// General search: http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb 

// Search with Movie ID: http://www.omdbapi.com/?i=tt3896198&apikey=thewdb 

// So everything is exactly the same as Colt explains in the following videos, except you must append &apikey=thewdb to the end of your url.

let express = require('express');
let app = express();

const request = require('request')
const rp = require('request-promise');

// app.set('view engine', 'ejs');

app.get("/results", function(req, res) {
    // Traditional Way
    // request('http://www.omdbapi.com/?s=california&apikey=thewdb', (error, response, body) => {
    //     if(!error && response.statusCode == 200) {
    //         const parsedData = JSON.parse(body);
    //         // res.send(parsedData["Search"][0]["Title"]);
    //         res.send(parsedData.Search[0].Title);
    //     } else {
    //         console.log("There is an issue....")
    //         console.log(error)
    //     }
    // });
    
    // ES6 Way
    rp('http://www.omdbapi.com/?s=california&apikey=thewdb')
        .then((body) => {
            const parsedData = JSON.parse(body);
            res.send(parsedData.Search[0].Title);
            // res.render('results');
        })
        .catch((error) => {
            console.log('Error!', error);
        })
})



app.listen(3000, () => {
    console.log('The server is listening!');
})