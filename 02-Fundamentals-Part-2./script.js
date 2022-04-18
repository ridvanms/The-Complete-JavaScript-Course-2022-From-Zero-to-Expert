`use strict`;

function calcAge1(birthYear) {
  const age = 2022 - birthYear;
  return age;
}
const age = calcAge1(2003);

const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};
const age2 = calcAge2(2006);

console.log(`he is ${age} years old,
she is ${age2} years old. `);

const calcAge3 = (birthYear) => 2022 - birthYear;
const age3 = calcAge3(2005);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(2003, "Ridvan"));


function cutFruitPieces(fruit){
  return fruit * 4;
}

 function fruitProceser(apples, oranges){
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${ applePieces } apple pieces and ${ orangePieces } orange pieces . `;
  return juice;
}
console.log(fruitProceser(4,3));
*/


const calcAverage = (a,b,c) => (a+b+c) / 3 ;

let  dolphineAverage = calcAverage(44,23,71);
let  koalaAverage = calcAverage(65,54,49);

function checkWinner(dolphineAverage,koalaAverage){
  if(dolphineAverage => 2 * koalaAverage){
    const dolphineAsWinner = `Dolphines win (${dolphineAverage} vs. ${koalaAverage})`;
    return dolphineAsWinner;
  }else if (dolphineAverage * 2  <=  koalaAverage){
    const koalaAsWinner = `Koalas win (${ koalaAverage} vs. ${dolphineAverage})`;
    return koalaAsWinner;
  }else {
    return `No team wins .... `;
  }
}

dolphineAverage = calcAverage(43,123,34);
koalaAverage = calcAverage(23,34,76);

console.log(checkWinner(dolphineAverage,koalaAverage));
*/


const frined1 = "Michael";
const frined2 = "Steven ";
const friend3 = "Peter";

const friends = ["Michael","Steven","Peter"];

const years = new Array(1991,1984,2008,2020);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log("\n");
console.log(friends.length );
console.log(friends.length-1 );
console.log(friends[friends.length-1] );
*/


const calcTip = bills => bills >= 50 && bills <= 300  ? bills * 0.15:
bills * 0.2;

const bills = [125,555,44];

const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];

const total = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];

console.log(total);

*/


const jonas = {
  firstName: "Jonas",
  lastName: "Shmetman",
  age: 2022 - 2001,
  job: "Engenier",
  friends: ["Michael","Peter","Steven"]
};

console.log(jonas.firstName);

console.log(jonas["friends"][0]);

console.log(jonas.friends.indexOf("Steven"));

const nameKey = "Name";
console.log(jonas["first"+nameKey]);

const interestedIn = prompt("What do you like to know about Jonas? job,firstName,lastName,age,friends: ")

if(jonas[interestedIn]){
  console.log(jonas[interestedIn]);
}else{
  console.log("This information doesn't exisist...");
}

jonas.location = 'Portugal'
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas)

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is
called ${jonas.friends[0]}`);
*/


const jonas = {
  firstName: "Jonas",
  lastName: "Shmetman",
  birthYear: 1991,
  age: 2022 - 2001,
  job: "Engenier",
  friends: ["Michael","Peter","Steven"],

  calcAge: function () {
      console.log(this);
      return 2022 - this.birthYear;
  }
};

console.log(jonas.calcAge());
console.log("Helllo World");
console.log("Helllo World");
console.log("Helllo World");

*/


const jonas = {
  firstName: "Jonas",
  lastName: "Shmetdmann",
  birthYear:1992,
  job: "Teacher",
  friends: ["Michael","Peter","Steven"],
  hasDriversLicense:false,

  calcAge: function () {
    const age = 2022 - this.birthYear;
    return age;
  },

  getSummmary: function () {
    return `${this.firstName} ia a ${this.calcAge()}-years old and he has ${this.hasDriversLicense ?"a":"no"} driver's license`;
  }
}

console.log(jonas.getSummmary());
*/


const something = {
  firstFirstName: "Mark",
  firstLastName: "Miller",
  onTheFirstKG: 78,
  onTheFirstHeight: 1.69,
  onTheFirstBMI: function () {
    const onTheFirstBMI = (this.onTheFirstKG / this.onTheFirstHeight**2);
    return onTheFirstBMI;
  },

  secondFirstName: "John",
  secondLastName: "Smith",
  onTheSecondKG: 92,
  onTheSecondHeight: 1.95,
  onTheSecondBMI: function () {
    const onTheSecondBMI = (this.onTheSecondKG / this.onTheSecondHeight**2);
    return onTheSecondBMI;
  },

  compareBMI: function () {
    const result =  (this.onTheFirstBMI() > this.onTheSecondBMI())  ? " heigher": "lower" ;
    return result;
  },

  conclusion: function () {
    return `${this.firstFirstName} ${this.firstLastName}'s BMI (${this.onTheFirstBMI()}) is ${this.compareBMI()}
    than ${this.secondFirstName} ${this.secondLastName}'s (${this.onTheSecondBMI()})`;
  },
}
*/
// console.log(something.conclusion());

//  const years = [1991,2007,1969,2020];
//  const ages = [];

//  for (let i = 0; i < years.length; i++){
//    ages.push(2022 - years[i]);
//  }
// console.log(ages);

const bills = [22.295,176,440,37,105,10,1100,86,52];
const calcTip = function (bill){
  return  bill >= 50 && bill <= 300  ? bill * 0.15:
  bill * 0.2;
}

let tips = [];
let totals = [];

for (let i = 0 ; i < bills.length; i++){
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(`${bills} bills `);
console.log(`${tips} tips`);
console.log(`${totals} totals`);

const calcAverage = function (arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(calcAverage(totals));

const array = [2, 4, 6, 12, 44, 2, 1, 4, 5, 8, 33];

const claclTempAmplitude = function (temp) {
  let max = temp[0];
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] > max) max = temp[i];
  }
  console.log(max);
};

claclTempAmplitude(array);

const forecastedMaximumTemperatures = [17, 21, 23];

const printForecast = function (temps) {
  let printString = "";
  for (let i = 0; i < temps.length; i++) {
    let dayS = i + 1 === 1 ? "day" : "days";
    printString += ` ...${temps[i]}C in ${i + 1} ${dayS}`;
  }
  return printString;
};

console.log(printForecast(forecastedMaximumTemperatures));
