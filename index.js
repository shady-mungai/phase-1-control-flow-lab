function scuberGreetingForFeet(numberOfFeet) {
  // Write your code here!
  if (numberOfFeet <= 400) {
    return "This one is on me!";
  } else if (numberOfFeet > 2000 && numberOfFeet < 2499) {
    return "I will gladly take your thirty bucks.";
  }
    else if (numberOfFeet > 2500) {
    return "No can do.";
  }
}

function ternaryCheckCity(city) {
  // Write your code here!

   return city == "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tipReceived) {
  // Write your code here!
  switch (tipReceived) {
    case "generous":
      return "Thank you so much.";
      break;

    case "not as generous":
     return "Thank you.";
      break;
    default: return "Bye."
    
  }
}
