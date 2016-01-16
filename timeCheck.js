
module.exports = function(str){
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