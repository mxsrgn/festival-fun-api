const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

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

app.get('/api/:eventLocation' , (req, res) => {
    const festivalCountry = req.params.eventLocation.toLowerCase()
    if (festivals[festivalCountry]){
        res.json(festivals[festivalCountry])
    }else{
        res.json(festivals['unknown'])
    }
})

app.listen(process.env.PORT || PORT , () =>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})