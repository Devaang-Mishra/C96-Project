
function addUser() {
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;
  localStorage.setItem("player1_name" , player1_name);
  localStorage.setItem("player2_name" , player2_name);
   
  window.location="index.html";

    //Set "player1_name" using localStorage.setItem() function
    number1_name=localStorage.setItem("player1_name");
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

number2_name=localStorage.setItem("player2_name");
document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;

    
	  //Set "player2_name" using localStorage.setItem() function

  
}


function send(){
  number1=document.getElementById("number1").value;
  number2=document.getElementById("number2").value;
  actual_answer=parseInt(number1) * parseInt(number2);
}

