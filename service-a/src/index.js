const express = require('express')

const app = express()

app.get('/', (req,res) => {
    res.send("A service")
})

app.listen(3001, () => {
    console.log("Service A running on http://localhost:3001")
})