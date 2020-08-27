const express = require('express')

const router = express.Router()

module.exports = ()=>{
    
    router.get('/', (req, res)=>{
        res.render('home')
    })

    router.get('/villas', (req, res)=>{
        res.render('villas')
    })

    router.get('/hotel', (req, res)=>{
        res.render('hotel')
    })

    return router
    
}