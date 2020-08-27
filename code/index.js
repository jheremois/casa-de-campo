const express= require('express')
const path = require('path')

const app = express()

app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')))

const routes = require('./routes/router')

app.use('/', routes())

app.use((req, res, next) => {
    
    res.status(404)

    res.render('404', { url: req.url })
    return

})

const port = process.env.PORT || 3000

app.listen(port)