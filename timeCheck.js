function timeCheck(str){
    var date = Date.parse(str);
    if(date && isNaN(str))
        return { unix: date, natural: str };
    else if(parseInt(str)){
        date = new Date(parseInt(str));
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var natural = months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
        return { unix: parseInt(str), natural: natural };    
    }
    else
        return {unix: null, natural: null };
}

/*
console.log(timeCheck(Date.parse('January 15, 2015').toString()));
console.log(timeCheck('January 15, 2015'));
console.log(timeCheck('67854'));
console.log(timeCheck('hdfkjfhdf fddh'));
console.log(timeCheck('January 50th, 2018'));
*/