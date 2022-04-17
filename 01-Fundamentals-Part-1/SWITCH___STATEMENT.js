const day = 'monday';

switch(day){
  case "monday": // day === "moday"
    console.log("Plan course structure");
    console.log('Go to coding meetup');
  case "tuesday":
    console.log("Pripare theory videos");
    break;
  case 'wednesday':
    break;
  case 'thursday':
    console.log("Write code example");
  case 'saturday':
    console.log("rest day ");
    break;
  case 'sunday':
    console.log("It is sunday ");
    break;
  default:
    console.log("Not valid day ");
}



