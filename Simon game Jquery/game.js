var gamePattern=[];
var userClickedPattern=[];
var buttonColors=["red","blue","green","yellow"];
var level=1;
var currentLevel=0;
var userChosenColor;
var userClickedPattern=[];
var flag=false;
//Game starts here
$(document).keypress(function(){
    if(flag==false){
        flag=true;
        nextSequence();
    }
});

//User Input
$(".btn").click(function(button){

  userChosenColor=button.target.id;
  userClickedPattern.push(userChosenColor);
  PlaySound(userChosenColor);
  $("#"+userChosenColor).addClass("pressed");
  setTimeout(function(){
      $("#"+userChosenColor).removeClass("pressed");
  },100);
  checkAnswer((userClickedPattern.length)-1);

});

//Answer checking
function checkAnswer(index){
  if(userClickedPattern[index]==gamePattern[index]){
    if(index==currentLevel){
      currentLevel++;
      setTimeout(function(){
        nextSequence();
      },1000);
    }
  }
  else{
    $("#level-title").text("Game Over,Press Any Key To Continue");
    gamePattern=[];
    level=1;
    flag=false;
    currentLevel=0;
  }
}

//Next Sequence
function nextSequence(){
  userClickedPattern=[];
  $("#level-title").text("Level "+level);
  level++;
  var randomNumber=Math.floor(Math.random()*4);
  var randomChosenColor=buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  PlaySound(randomChosenColor);
  $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

}

//Sound playing function
function PlaySound(name){
  switch(name) {
    case "red":{
      var redSound=new Audio("sounds/red.mp3");
      redSound.play();
      break;
    }
    case "blue":{
      var blueSound=new Audio("sounds/blue.mp3");
      blueSound.play();
      break;
    }
    case "green":{
      var greenSound=new Audio("sounds/green.mp3");
      greenSound.play();
      break;
    }
    case "yellow":{
      var yellowSound=new Audio("sounds/yellow.mp3");
      yellowSound.play();
      break;
    }

  }
}
