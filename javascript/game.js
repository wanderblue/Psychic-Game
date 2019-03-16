var userGuess;
var random ; 
var numWins = 0;
var numLoses = 0;
var numOver = 0;
var numLeft;


random = stringGen();



for (var i = 0; i < 9; i++) {

    numWins = 0;
    numloses = 0;
    numLeft =  9;

  document.getElementById("userInput").addEventListener("keyup", uniKey);

  
}

     


   function uniKey() {
    var userGuess = event.key;

    //document.getElementById("demo").innerHTML = "The Unicode KEY code is: "+ userGuess;

    myFunction(userGuess,i);


   // document.getElementById("demo").innerHTML = random;    
  }



function myFunction(guess,iii) {
 guess = guess.toUpperCase();


  if (guess == random) {
  
    numWins++;
    document.getElementById("wins").innerHTML = numWins;

   
    document.getElementById('userInput').value = '';

    reset();
 
  }
  else{   

          numOver++;
          numLeft =  9 - numOver;
          document.getElementById("left").innerHTML = numLeft;


          if (numOver == 9) {

            numLoses++;

            document.getElementById("loses").innerHTML = numLoses;

          
            document.getElementById('userInput').value = '';
            reset();
          }
      
     }
    
   }



   function reset() {

       document.getElementById('wins').value = '';
       document.getElementById('loses').value = '';
       document.getElementById('left').innerHTML  = '';
       document.getElementById('userInput').innerHTML  = '';
      
       i = 0;
       numOver = 0;
       numLeft =  9;
       random = stringGen();

}


function stringGen(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      
      text = possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }