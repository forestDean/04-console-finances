// calculate the greatest increase in Profit/Losses (date and amount) over the entire period.
var maxProfit = 0;

//https://stackoverflow.com/questions/7848004/get-column-from-a-two-dimensional-array
//function getCol(matrix, col){
var finances = [];
for (var i = 0; i < finances.length-1; i++) {
  change = (finances[i+1][1]) - (finances[i][1]);
  //change.push(finances[i][3]);
  finances.push(change[i+1][2]);
  //console.log(change);
}