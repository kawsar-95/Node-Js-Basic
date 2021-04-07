//Event Module

const School = require('../lesson5/school')

const school = new School;

//register a listener for bell event

school.on('bellRing', ({period,text})=> {
    console.log(`we hear the bell rang after ${period} ${text}`);
})


school.startPeriod();
