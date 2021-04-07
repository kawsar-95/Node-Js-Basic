const EventEmmitter = require('events');

class School extends EventEmmitter {
    startPeriod() {
        console.log( 'class started' )


        //raise an events

    setTimeout(() => {
        this.emit('bellRing',{
            period: 'fourth',
            text: 'period ended',
        });
    }, 2000);
    }
}
module.exports = School;