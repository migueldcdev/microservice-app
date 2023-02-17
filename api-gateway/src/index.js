const express = require('express')

const app = express()

const httpProxy = require('express-http-proxy')

const serviceAProxy = httpProxy('http://localhost:3001')

//const serviceBProxy = httpProxy('http://localhost:3003')

app.get('/', (req,res) => {
    serviceAProxy(req,res)
})

app.listen(3000, () => {
    console.log("Api Gateway running on http://localhost:3000")
})