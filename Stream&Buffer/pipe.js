// Reading from file using ReadStream and writting on a new file using writeStream

const fs = require('fs')
const { chunk } = require('lodash')

const ourReadStream = fs.ReadStream(`${__dirname}/bigdata.txt`)
const ourWriteStream = fs.WriteStream(`${__dirname}/output.txt`)


// ourReadStream.on('data', (chunk) =>{
//     ourWriteStream.write(chunk)
// })

ourReadStream.pipe(ourWriteStream)