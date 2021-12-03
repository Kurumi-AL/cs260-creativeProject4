const express = require('express');
const cors = require('cors');
// const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(express.json());

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/kiltons-shop', {
    useNewUrlParser: true
});

// async function main() {
//     const { MongoClient } = require('mongodb');
//     const uri = "mongodb+srv://Kuru-db:Momo-taro.db395.Kuja@cluster0.eaaro.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//     client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
//     });
// }
// main().catch(console.error)

// Configure multer so that it will upload to '../front-end/public/images'
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../kiltons-shop/public/images/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
const upload = multer({
    // dest: '../kiltons-shop/public/images/',
    limits: {
        fileSize: 10000000
    },
    storage: storage
});

// Create a scheme for items in the shop
const itemSchema = new mongoose.Schema({
    item_name: String,
    pic_path: String,
    price_mon: Number
});
itemSchema.virtual('id')
    .get(function() {
        return this._id.toHexString();
    })
itemSchema.set('toJSON', {
    virtuals: true
})

const exchangeRateSchema = new mongoose.Schema({
    monster_parts: String,
    pic_path: String,
    price_mon: Number
});
exchangeRateSchema.virtual('id')
    .get(function() {
        return this._id.toHexString();
    })
exchangeRateSchema.set('toJSON', {
    virtuals: true
})

const diarySchema = new mongoose.Schema({
    title: String,
    path: String,
    description: String
});
diarySchema.virtual('id')
    .get(function() {
        return this._id.toHexString();
    })
diarySchema.set('toJSON', {
    virtuals: true
})

// Create a model for items in the museum
const Item = mongoose.model('Item', itemSchema);
const ExchangeRate = mongoose.model('ExchangeRate', exchangeRateSchema);
const Diary = mongoose.model('Diary', diarySchema);


// ================== CREATE =====================
// Upload a photo. Uses the multer middleware for the upload and then returns
// the path where the photo is stored in the file system.
app.post('/api/photos', upload.single('photo'), async (req, res) => {
    // Just a safety check
    if (!req.file) {
      return res.sendStatus(400);
    }
    res.send({
      path: "/images/" + req.file.filename
    });
  });

// Create a new diary in the kiltons shop
app.post('/api/diaries', async (req, res) => {
    const diary = new Diary({
        title: req.body.title,
        path: req.body.path,
        description: req.body.description
    });
    try {
        await diary.save();
        res.send(diary);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});


// ================== GET ALL =====================
// Get a list of all of the diaries in the diary
app.get('/api/diaries', async (req, res) => {
    try {
        let diaries = await Diary.find();
        res.send(diaries);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// Get a list of all of the items in the database
app.get('/api/items', async (req, res) => {
    try {
        let items = await Item.find();
        res.send(items);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// // Get a list of all of the exchange rates in the database
app.get('/api/exchange-rates', async (req, res) => {
    try {
        let exchangeRates = await ExchangeRate.find();
        res.send(exchangeRates);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});


// ================== GET ONE =====================
app.get('/api/items/:id', async (req, res) => {
    try {
        var item = await Item.findOne({
            _id: req.params.id
        });
        res.send(item);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.get('/api/exchange-rates/:id', async (req, res) => {
    try {
        var exchangeRate = await ExchangeRate.findOne({
            _id: req.params.id
        });
        res.send(exchangeRate);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});


// ================== UPLOAD =====================
// Upload a new diary
app.post('/api/diaries', upload.single('diary'), async (req, res) => {
    if (!req.file) {
        return res.sendStatus(400);
    }
    res.send({
        path: '/images/' + req.file.filename
    });
});


// ================== DELETE =====================
// Delete a diary
app.delete('/api/diaries/:id', async (req, res) => {
    try {
        var diary = await Diary.deleteOne({
            _id: req.params.id
        });
        diary.title = req.title;
        diary.description = req.description;
        diary.save();
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});


// ================== EDIT =====================
// Edit a photo
app.put('/api/diaries/:id', async (req, res) => {
    const id = req.params.id;
    const newDiary = req.body;

    try {
        await Diary.findByIdAndUpdate(id, { title: newDiary.title, description: newDiary.description });
    
    } catch (error) {
        console.log(error);
    }
});


app.listen(3000, () => console.log('Server listening on port 3000!'));