const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

const musicFestivals = {
    'belgium':{
        'eventLocation': 'Boom, Antwerp, Belgium',
        'eventName': 'Tomorrowland',
        'eventMusicGenre': 'EDM Music Festival'
    },
    'united states':{
        'eventLocation': 'Las Vegas, Nevada, USA',
        'eventName': 'Electric Daisy Carnival',
        'eventMusicGenre': 'EDM Music Festival'
    },
    'unknown':{
        'eventLocation': 'unknown',
        'eventName': 'unknown',
        'eventMusicGenre': 'unknown'
    },
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:eventLocation' , (req, res) => {
    const festivalCountry = req.params.eventLocation.toLowerCase()
    if (musicFestivals[festivalCountry]){
        res.json(musicFestivals[festivalCountry])
    }else{
        res.json(musicFestivals['unknown'])
    }
})

app.listen(process.env.PORT || PORT , () =>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})