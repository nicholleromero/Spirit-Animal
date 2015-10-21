
var animalObjects = JSON.parse(localStorage.getItem('animals'));

var winningAnimal = 0;

for (var i = 0; i < (animalObjects.length); i++) {
		if(animalObjects[i].score > winningAnimal) {
		winningAnimal = animalObjects[i];
	}
};

var song = winningAnimal.animalSong
var output = function() {
	var hOne = document.getElementById('textMsg');
	var msg = "Congradulations, " + localStorage.getItem('username') + '<br />' + "We've Found Your Spirit Animal"
						+ winningAnimal.animalName + '<br />' + '<img src= ' + winningAnimal.animalImage + ' />';
	hOne.innerHTML = msg;
  var audio = document.getElementById('audio');
  var source = document.getElementById('mp3Source');
  source.src=song
  // + song.getAtribute;

  audio.load();
  audio.play();
}

output();

