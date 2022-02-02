require('dotenv').config()
const express = require('express')
const app = express();
const http = require('http')
const cors = require('cors')
const db = require('./src/models')
const bodyParser=require('body-parser')
var cookieParser = require('cookie-parser');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cookieParser());
app.use(cors())
const server = http.createServer(app)
const mulagoRouter = require('./src/routes/mulago')
const muhRouter = require('./src/routes/muh')
const kirudduRouter = require('./src/routes/kiruddu')
const pythonRouter = require('./src/routes/python')



app.use('/mulago',mulagoRouter)
app.use('/muh',muhRouter)
app.use('/kiruddu',kirudduRouter)
app.use('/python',pythonRouter)


db.sequelize.sync().then(() => {
    server.listen(3002, () => {
        console.log('server started on port 3002')

    })
})

