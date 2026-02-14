// const EventEmitter = require('events')

// const emitter = new EventEmitter()

// Register a Listener for 'Fire' event
// emitter.on('Fire', () =>{
//     console.log("We need to run!")
// })

// Raise an Event
// emitter.emit('Fire')  


// emitter.on('Fire', () =>{
//     console.log("We need to run!")
// })


// // The event will rise 2sec later, and then the action will be performed
// setTimeout(() => {
//     emitter.emit('Fire')
// }, 2000);



//Multiple perametre
// emitter.on('Fire', ({period, text}) =>{
//     console.log(`We need to run because ${period} ${text}`)
// })


// The event will rise 2sec later, and then the action will be performed
// setTimeout(() => {
//     emitter.emit('Fire', {
//         period : 'first',
//         text : 'period ended',
//     });
// }, 2000);


//Raising Event from differnt file

const School = require('./school')

const school = new School()

school.on('Fire', ({period, text}) =>{
    console.log(`We need to run because ${period} ${text}`)
})

school.startPeriod()