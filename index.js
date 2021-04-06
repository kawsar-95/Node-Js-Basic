//Event Module

const EventEmmitter = require('events');
const emitter = new EventEmmitter();

//register a listener for bell event

emitter.on('bellRing', ({period,text})=> {
    console.log(`we hear the bell rang after${period} ${text}`);
})

//raise an events

setTimeout(() => {
    emitter.emit('bellRing',{
        period: 'fourth',
        text: 'period ended',
    });
}, 2000);
