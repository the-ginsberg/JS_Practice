// Ascending Loop
var number = 1;
while(number <= 5){
  console.log(number);
  number++;
}

// Descending Loop
var num = 10;
while(num >= 1){
  console.log(num);
  num--;
}

// Problem Solving with Loops
var numSheep = 4;
var monthNumber = 1;
var monthsToPrint = 12;

while(monthNumber <= monthsToPrint){
  numSheep = (numSheep * 4);
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
  monthNumber++;
}
