var animalObjects = JSON.parse(localStorage.getItem('animals'));

var winningAnimal = 0;

for (var i = 0; i < (animalObjects.length); i++) {
		if(animalObjects[i].score > winningAnimal) {
		winningAnimal = animalObjects[i];
	} 
};

var output = function() {
	var hOne = document.getElementById('textMsg');
	var article = document.getElementById('animal-content');
	var msgOne = "Congradulations, " + localStorage.getItem('username') + '<br />' + '<img src= ' + 
						winningAnimal.animalImage + ' />' + '<br />' + "We've Found Your Spirit Animal " 
						+ " The " + '<q>' + winningAnimal.animalName.toUpperCase() + '</q>';
	hOne.innerHTML = msgOne;
	var msgTwo = winningAnimal.animalInfo;
	article.innerHTML = msgTwo;
}

output();

var playAgain = function() {
	 window.location.href = "index.html";
}

var again = document.getElementById('play-again');
again.addEventListener('click', playAgain);

