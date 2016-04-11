// Can you find after how many years will a person's birthday fall on the same day of the week that he was born?
//
// For example, Joy's birthday is on 16th October, 1990 which falls on Friday. After how many years will his birthday fall on Friday again? (That would be 11 years)
//Nice
//ms = 31622400 * 1000
function next(year, month, date){
    var bDay = new Date(year + "-" + month + "-" + date);
    var nYear = year + 1;
    var nDate = new Date(nYear + "-" + month + "-" + date);
    while(nDate.getDay() !== bDay.getDay()){
      nYear++;
      nDate = new Date(nYear + "-" + month + "-" + date);
    }
    return nDate.getFullYear() - bDay.getFullYear();
  }
