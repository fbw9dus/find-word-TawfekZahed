/*
const fs = require('fs')


const searchTerm = 'localhost'

const reader = fs.createReadStream('data.txt', 'utf8')


let chunkNum = 0
let wordCount = 0


reader.on('data', chunk => {
    
    const results = chunk.split(searchTerm).length
    wordCount + results

})
reader.on ('end', () => {
    console.log('loading complete')
    console.log(searchTerm+" wurde " + wordCount + " mal gefunden")
})

*/
const fs = require('fs')
const stream = require('stream')

const searchTerm = 'function'
const reader = fs.createReadStream('data.txt', 'utf8')
const logger = fs.createWriteStream('wordSearch.log')
let chunkNum = 0
let wordCount = 0

const wordCounter = (() => {
    let count = 0

    return new stream.Transform({
        objectMode: true,
        transform: (data, _, done) => {
            done(null, count++ + "\n")
        }
    })
})()

reader.pipe(wordCounter).pipe(logger)

reader.on('end', () => {
    console.log('loading complete')
    console.log(searchTerm + " wurde " + wordCount + " mal gefunden")
})