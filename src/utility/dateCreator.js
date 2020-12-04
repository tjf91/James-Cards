//this whole bit was taken from the chat server. I just separated the variables to match
function dateCreator() {
    var date = new Date();
    var time;
  
    var month = date.getMonth() + 1;
    month = month < 10 ? `0${month}` : month; // Two digit months: 01, 02, etc...
    var day = date.getDate();
    var year = date.getFullYear();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var ampm = hour >= 12 ? 'pm' : 'am';
    hour = hour % 12;
    hour = hour ? hour : 12; // '0' needs to be 12 ( 0 is falsy, everything else is truthy )
    minute = minute < 10 ? `0${minute}` : minute;
  
    date = `${month}/${day}/${year}`;
    time = `${hour}:${minute} ${ampm}`;
  
    console.log( `${date} - ${time}` );
    return date;
  }
  function timeCreator() {
    var date = new Date();
    var time;

    var hour = date.getHours();
    var minute = date.getMinutes();
    var ampm = hour >= 12 ? 'pm' : 'am';
    hour = hour % 12;
    hour = hour ? hour : 12; // '0' needs to be 12 ( 0 is falsy, everything else is truthy )
    minute = minute < 10 ? `0${minute}` : minute;
  
    
    time = `${hour}:${minute} ${ampm}`;
  
   
    return time;
  }

  export {dateCreator, timeCreator}