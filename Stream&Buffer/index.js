//Reading from file using "ReadStream"
const fs = require('fs')
const { chunk } = require('lodash')

const ourReadStream = fs.ReadStream(`${__dirname}/bigdata.txt`)

ourReadStream.on('data', (chunk) =>{
    console.log(chunk.toString())
})