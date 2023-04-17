const express = require('express')

const bodyParser = require('body-parser')

const sequelize = require('./util/database')

const sellerProductRoutes = require('./routes/seller-products')

var cors = require('cors')
const sellerProduct = require('./models/seller-products')

const app = express();
app.use(cors())

app.use(bodyParser.json({ extended: false }));

app.use(sellerProductRoutes)

sequelize
    .sync()
    .then((result) => {
        app.listen(5000);
    })
    .catch(err => {
        console.log(err)
    })