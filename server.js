const express = require('express')
const app = express()
const PORT = 8000

const restaurants = {
    'diamond head market and grill' : {
        'image' : 'https://media-cdn.tripadvisor.com/media/photo-s/0b/e5/5b/4c/diamond-head-market-grill.jpg',
        'address' : '3158 Monsarrat Avenue, Honolulu, HI 96815',
        'phone number' : '808-732-0077',
        'category' : 'Hawaiian',
        'website' : 'http://www.diamondheadmarket.com/contact-us/',
        'must try' : 'Blue berry cream cheese scone',
        'price' : '$5 - 15',
        'map' : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.0420383564942!2d-157.81378188511243!3d21.26980348586825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c00727db01cf65b%3A0xf33ce6494ace66c5!2s3158%20Monsarrat%20Ave%2C%20Honolulu%2C%20HI%2096815%2C%20USA!5e0!3m2!1sen!2sca!4v1654549269124!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    }, 
    'yummy huli huli chicken' : {
        'image' : 'https://lirp.cdn-website.com/720a31de/dms3rep/multi/opt/IMG_1023-1920w.JPG',
        'address' : '56-565 Kamehameha Hwy, Kahuku, HI 96731, United States',
        'phone number' : '808-277-6720',
        'category' : 'Road side stand',
        'website' : 'https://www.mikeshulichicken.com/',
        'must try' : 'Chicken & Kalua Pork Lunch Plate',
        'price' : '$10 - 20',
        'map' : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3707.642960186416!2d-157.95610667540265!3d21.67774213975317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006a0bd9ead147%3A0x976b67378b46bda!2sMike&#39;s%20Kiawe%20Broiled%20Huli%20Huli%20Chicken!5e0!3m2!1sen!2sca!4v1654549643990!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    }, 
    'unknown' : {
        'image' : 'unknown',
        'address' : 'unknown',
        'phone number' : 'unknown',
        'category' : 'unknown',
        'website' : 'unknown',
        'must try' : 'unknown',
        'price' : 'unknown',
        'map' : 'unknown'
    }
}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const restaurantName = request.params.name.toLowerCase()
    if (restaurants[restaurantName]) {
        response.json(restaurants[restaurantName])
    } else {
        response.json(restaurants['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port : ${PORT}`)
} )