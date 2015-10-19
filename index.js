//variable to store our username.
var username = "";
//Function that allows the username to be stored.
var userInput = function() {
 username = document.getElementById('username').value;
 document.getElementById('username').value = "";
 console.log(username);
 document.getElementById('loadQuestions');
}

var loadQuestions = function() {
}

var submitButton = document.getElementById('submitButton');
submitButton.onclick = userInput;

  
