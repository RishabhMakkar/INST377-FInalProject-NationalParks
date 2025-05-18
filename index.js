const express = require('express');
const supabaseClient = require('@supabase/supabase-js');
const bodyParser = require('body-parser')

const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
const supabaseURL = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

const supabase = supabaseClient.createClient(supabaseURL, supabaseKey)

app.get('/', (req, res) => {
    res.sendFile('public/MainPage.html', {root: __dirname });
    res.sendFile('public/About.html', {root: __dirname });
    res.sendFile('public/FindPark.html', {root: __dirname });
    res.sendFile('public/FindParkByActivity.html', {root: __dirname });
    res.sendFile('public/FindParkByTopic.html', {root: __dirname });

}
)

app.get('/States', async(req, res) => {
    console.log('attempting to get states')
    const {data, error} = await supabase.from('States').select()
    if (error) {
        console.log(`Error:  ${error}`)
        res.statusCode=500
        res.send(error)

    }
    res.send(data)
})

app.get('/Parks', async(req, res) => {
    console.log('attempting to get Parks')
    const {data, error} = await supabase.from('Parks').select()
    if (error) {
        console.log(`Error:  ${error}`)
        res.statusCode=500
        res.send(error)

    }
    res.send(data)
})
    


app.post('/Parks', async(req, res) => {
    console.log("adding Park")
    console.log(req.body)
    const parkName = req.body.parkName
    const parkRating = req.body.parkRating
    const comments = req.body.comments
    console.log(parkName)

    const {data, error} = await supabase
    .from('Parks')
    .insert({Park_Name: parkName, 
             Park_Ratings: parkRating,
             Comments: comments
           })
    .select()
    if (error) {
        console.log(`Error: ${error}`)
        res.statusCode=500
        res.send(error)
    }
    console.log(data)
    res.send(data);
})

/*
app.post('/States', async(req, res) => {
    console.log("adding state")
    console.log(req.body)
    const stateName = req.body.stateName
    const stateAbbreviation = req.body.stateAbbreviation
    console.log(stateName)

    const {data, error} = await supabase
    .from('States')
    .insert({State_Name: stateName, State_Abbreviation: stateAbbreviation})
    .select()
    if (error) {
        console.log(`Error: ${error}`)
        res.statusCode=500
        res.send(error)
    }
    console.log(data)
    res.send(data);
})
    */

app.listen(port, () => {
    console.log('APP is alive on port ' + port)
   // pick up from here tomorrow app.get('/')
});
