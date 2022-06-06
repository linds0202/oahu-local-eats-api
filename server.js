const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const restaurants = {
    'diamond head market and grill' : {
        'image' : 'https://media-cdn.tripadvisor.com/media/photo-s/0b/e5/5b/4c/diamond-head-market-grill.jpg',
        'address' : '3158 Monsarrat Avenue,\n Honolulu, HI 96815',
        'phone number' : '808-732-0077',
        'category' : 'Hawaiian',
        'website' : 'http://www.diamondheadmarket.com/contact-us/',
        'must try' : 'Blue berry cream cheese scone',
        'price' : '$5 - 15',
        'map' : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.0420383564942!2d-157.81378188511243!3d21.26980348586825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c00727db01cf65b%3A0xf33ce6494ace66c5!2s3158%20Monsarrat%20Ave%2C%20Honolulu%2C%20HI%2096815%2C%20USA!5e0!3m2!1sen!2sca!4v1654549269124!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    }, 
    'mikes kiawe broiled huli huli chicken' : {
        'image' : 'https://lirp.cdn-website.com/720a31de/dms3rep/multi/opt/IMG_1023-1920w.JPG',
        'address' : '56-565 Kamehameha Hwy,\n Kahuku, HI 96731, United States',
        'phone number' : '808-277-6720',
        'category' : 'Road side stand',
        'website' : 'https://www.mikeshulichicken.com/',
        'must try' : 'Chicken & Kalua Pork Lunch Plate',
        'price' : '$10 - 20',
        'map' : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3707.642960186416!2d-157.95610667540265!3d21.67774213975317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006a0bd9ead147%3A0x976b67378b46bda!2sMike&#39;s%20Kiawe%20Broiled%20Huli%20Huli%20Chicken!5e0!3m2!1sen!2sca!4v1654549643990!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    }, 
    'giovannis shrimp truck' : {
        'image' : 'https://media-cdn.tripadvisor.com/media/photo-s/11/89/ce/1f/giovanni-s-north-shore.jpg',
        'address' : '66-472 Kamehameha Hwy,\n Haleiwa, HI 96712, United States',
        'phone number' : '808-201-3980',
        'category' : 'Road side stand',
        'website' : 'http://www.giovannisshrimptruck.com/',
        'must try' : 'Lemon Butter Shrimp Lunch Plate',
        'price' : '$15 - 20',
        'map' : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29044.990447579334!2d-158.1146451672416!3d21.58106887719812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c005f2e53dae835%3A0xf377caf821230877!2sGiovanni&#39;s%20Shrimp%20Truck!5e0!3m2!1sen!2sca!4v1654552040813!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    }, 
    'teds bakery' : {
        'image' : 'https://www.tedsbakery.com/wp-content/uploads/2019/01/Strawberry-Guava-Cream-Pie.jpg',
        'address' : '59-024 Kamehameha, State Rte,\n Haleiwa, HI 96712, United States',
        'phone number' : '808-638-8207',
        'category' : 'Bakery',
        'website' : 'https://www.tedsbakery.com/',
        'must try' : 'Pineapple Macadamia Nut Cheesecake',
        'price' : '$5+',
        'map' : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59322.39959760377!2d-158.08557755647803!3d21.677469431177766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c0050af67435885%3A0xa43a1764fbd7e1d!2sTed&#39;s%20Bakery!5e0!3m2!1sen!2sca!4v1654552272940!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    }, 
    'killer tacos' : {
        'image' : 'https://media-cdn.tripadvisor.com/media/photo-s/06/b3/27/21/killertacos-salad.jpg',
        'address' : '66-560 Kamehameha Hwy Ste 1,\n Haleiwa, HI 96712, United States',
        'phone number' : '808-637-4573',
        'category' : 'Counter service',
        'website' : 'https://www.killertacos.com/',
        'must try' : 'Barnyard Burrito',
        'price' : '$10 - 20',
        'map' : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7939.102246320024!2d-158.1078329072512!3d21.58062942080204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c005f2f9048e7b7%3A0x70db61e7152f8810!2sKillerTacos!5e0!3m2!1sen!2sca!4v1654552403561!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    }, 
    'matsumoto shave ice' : {
        'image' : 'https://live.staticflickr.com/7353/26957792270_f27d2cd31b_b.jpg',
        'address' : '66-111 Kamehameha Hwy #605,\n Haleiwa, HI 96712, United States',
        'phoneNumber' : '808-637-4827',
        'category' : 'Dessert',
        'website' : 'https://matsumotoshaveice.com/',
        'mustTry' : 'Chicken & Kalua Pork Lunch Plate',
        'price' : '$7 - 15',
        'map' : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.6540006911255!2d-158.1060493708555!3d21.59088072229585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c0058d374c913ed%3A0x3800adea096e5171!2sMatsumoto%20Shave%20Ice!5e0!3m2!1sen!2sca!4v1654552560711!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
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