// Harshad numbers can be found in any number base, but we are going to focus on base 10 exclusively.
//
// Your task is to complete the skeleton Harshad object ("static class") which has 3 functions.
//
// isValid that checks if the number is a Harshad number or not // Harshad.isValid( 1 ) returns true
// getNext that returns the next Harshad number // Harshad.getNext( 0 ) returns 1
// getSerie that returns a serie of n Harshad number, optional start value not included // Harshad.getSerie( 3, 1000 ) returns [ 1002, 1008, 1010 ], while // Harshad.getSerie( 3 ) returns [ 1, 2, 3 ]
// You do not need to care about the passed parameters in the test cases,
// they will always be valid integers between 0 and 2000 (except for the start argument in getSerie() which is optional and should default to 0).
//
function isValid(number){
  var num = number.toString();
  var numSum = 0;
  for(var i = 0; i < num.length; i++)
    numSum+= parseInt(num[i]);
  return (number/numSum % 1 === 0) ? true : false;
}

function getNext(number){
  var num = number + 1;
  while(!isValid(num))
    num++;
  return num;
}

function getSeries( count, start ) {
  var series = [];
  start = (start===undefined) ? 0 : start;
  while(series.length != count){
    start = getNext(start);
    series.push(start);
  }
  return series;
}
