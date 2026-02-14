const EventEmitter = require('events')

class School extends EventEmitter{
    startPeriod(){
        console.log("Class Started!")

        setTimeout(() => {
            this.emit('Fire', {
                period : 'first',
                text : 'period ended',
            });
        }, 2000);
    }
}

module.exports = School
