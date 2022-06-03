const express = require('express')
const app = express()
const PORT = 8000


const festivals = {
    'belgium':{
        'eventLocation': 'Boom, Antwerp, Belgium',
        'eventName': 'Tomorrowland',
        'eventType': 'EDM Music Festival'
    },
    'united states':{
        'eventLocation': 'Las Vegas, Nevada, USA',
        'eventName': 'Electric Daisy Carnival',
        'eventType': 'EDM Music Festival'
    },
    'unknown':{
        'eventLocation': 'unknown',
        'eventName': 'unknown',
        'eventType': 'unknown'
    },
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name' , (req, res) => {
    const festivalCountry = req.params.name.toLowerCase()
    if(festivals[festivalCountry]){
        res.json(festivals[festivalCountry])
    }else{
        res.json(festivals['unknown'])
    }
})

app.listen(PORT , () =>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})