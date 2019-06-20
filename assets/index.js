var firebaseConfig = {
    apiKey: "AIzaSyBq_903trIh2hwAf3lqW9Y60Vyoj85lkl4",
    authDomain: "rps-multiplayer-7ba7f.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-7ba7f.firebaseio.com",
    projectId: "rps-multiplayer-7ba7f",
    storageBucket: "rps-multiplayer-7ba7f.appspot.com",
    messagingSenderId: "486393614000",
    appId: "1:486393614000:web:fc17275cef72c081"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();
  
  var player1 = false;
  var player2 = false;

//syncing object changes
// calliing on the database reference. points to location of object


//ways to complete multiplayer game
//minmium viable product, then optimize/style!!
//cpnsult previosu paper rock sciccors game.


// ---------------------------------------------------------
//RPS Funtionality pseudocode
//
//
//
$(document).ready(function() {
  const userscore = 0;
  const compscore = 0;
  // const userScore_span = document.getElementById("user-score");
  const userScore_span = $("#user-score");
  const compScore_span = document.getElementById("comp-score");
  const scoreBoard_div = document.querySelector(".score-board");
  const result_div = document.querySelector(".result");
  const rock_div = document.getElementById("r");
  const paper_div = document.getElementById("p");
  const scissors_div = document.getElementById("s");

  //cacheing the dom means storing something for futurea use
  //for efficeincy/convenieance
  
  //coding the computer to pick a game choice:rps
  function getuser2Choice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    // console.log(Math.random());
    console.log(randomNumber);
    return choices[randomNumber];
    
  }

  

  
  const user2Choice= getuser2Choice();
 

 // on click commands for rps game options.
 // we put the 
 console.log(user2Choice)
 
  function game(user1Choice) {
    //   console.log(user1Choice)
    
     switch (user1Choice + user2Choice){
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            console.log("player 1 (user) wins!!");
        break;
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            console.log("player 2 (user2/computer) wins!!");
        break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            console.log("It's a tie!!");
        break; 
    }
  }

 //Using switch statements for winning/loosing conditions. switch statements make thinsg eaier sometimes
 

  $(rock_div).click(function() {
    game("rock");
    database.ref("user1Choice").set("rock")
  });
  $(paper_div).click(function() {
    game("paper");
    database.ref("user1Choice").set("paper")
  });
  $(scissors_div).click(function() {
    game("scissors");
    database.ref("user1Choice").set("scissors")
  });
});
//on childadded means that it satrts 
//one rsponesr per child in database

//the following is an exapmle of how to use if statements
// const name = "pine";
// if(name === "David"){
//     console.log("Hello")
// }
// else if (name === "pine"){
//     console.log("hey")
// } 


// the following is an example of how to use switch statements
// const name = "apple";
// switch (name){
//     case "apple":
//     console.log("this is an apple");
//     break;
//     case "pine":
//     console.log("this is a pineapple")
//     break;
// }




// what i still need:
//fix winning/loosing condtions...
//display results on page
//change scoreboard
//send user ipouted data to firease 
//call back data from firebase and apply wiining loosing conditions 

//setting up the 3 possible scenarios of our game
// there are three case
//1st case: if user1State is false set user1State to true and set player1 to true (allowing entrance to game) 
//2nd case: if user1Sate is true and user2Sate is false set user2State to true and player2 to true (allowing entrance to game) 
//3rd case:if user1State is true and user2State is true send message that says (does not allow entrance to game)
//

//