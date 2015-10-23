$("document").ready(function(){
  alert("loaded");

  //declare variable (to be used later)
  var player;
  var nextPlayer;
  var playerClass;
  var turnNumber = 0;

  //here is how it goes:
  //add event listener on table
  //get target, use target to switch color of each element (by adding a class)
  //design a function to alternate color choice (tracking moves %2)

  function startGame() {
    $(".board").on("click", changeSquare)
  }

  function changeSquare(evt){
    var target = $(evt.target);
    console.log("clicked " + target);
    if (target.hasClass("blank")) {
      playerTurn();
      target.addClass(playerClass);
      target.text(player);
      target.removeClass('blank');
      $("#turn").text(nextPlayer);
    }
    checkWinner();
  }

  function playerTurn() {
    console.log(turnNumber);
    if (turnNumber % 2 == 0) {
      player = 'X';
      playerClass = "chooseX"
      nextPlayer = 'O'
    }
    else {
      player = 'O';
      playerClass = "chooseO";
      nextPlayer = 'X'
    }
    turnNumber++;
  }

  //next steps: add a function to clear the board

  var resetButton = $("#reset").on("click", boardClear);

  function boardClear() {
    $(".cell").each( function(i) {
      $(this).removeClass("chooseX chooseO");
      $(this).addClass("blank");
      turnNumber = 0;
      $("#turn").text("X")
    })
  }

//add a function to check for no winner

  function checkWinner() {
    if (turnNumber >= 9) {
      console.log("game over")
      console.log(turnNumber)
    }
  }
startGame();
})
