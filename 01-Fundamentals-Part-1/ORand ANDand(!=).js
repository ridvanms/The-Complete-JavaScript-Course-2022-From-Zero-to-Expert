const hasDrivingLicense = true;
const hasGoodVision = true;

if(hasDrivingLicense && hasGoodVision){
  console.log("Sarah is able to drive");
}else {
  console.log("Someone else should drive...");
}

const isTired = true;
console.log(hasDrivingLicense && hasGoodVision && isTired);

if(hasGoodVision && hasDrivingLicense && !isTired ){
  console.log("Sarah is able to drive ");
}else {
  console.log("Someone else should drive");
}
