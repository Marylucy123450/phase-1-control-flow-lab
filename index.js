function scuberGreetingForFeet(ride){
  
  if(ride <= 400){
   return 'This one is on me!';
   }
   
   else if(ride > 2000 && ride <= 2500){
   return 'I will gladly take your thirty bucks.';
   }

   else{
    return 'No can do.'
   }
  
  }


//function ternaryCheckCity(){
  // Write your code here!
  function ternaryCheckCity(city){
  if (city=== 'NYC'){
    return 'Ok, sounds good.'
  }
  else{
    return'No go.'
  }
  }
//}

//function switchOnCharmFromTip(){
  // Write your code here!
  function switchOnCharmFromTip(tip){
    if(tip==='generous'){
      return 'Thank you so much.'
    }
    else if(tip==='not as generous'){
      return 'Thank you.'
    }
    else{
      'Thank for everything bye.'
      return 'Bye.'
    }
  }

//}