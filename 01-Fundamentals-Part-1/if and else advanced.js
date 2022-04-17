const favorite = Number(prompt("What is your favorite number? "));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  console.log(`${favorite} is grate number `);
} else if (favorite === 7) {
  console.log(`${favorite} is amaizng number `);
} else {
  console.log(`${favorite} is not awsome like 7,23`);
}

if (favorite != 23) {
  console.log(`${favorite} is not the number try again `);
} else {
  console.log("awsome number is 23 and it's huge luck");
}
