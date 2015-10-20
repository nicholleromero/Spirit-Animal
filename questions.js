var Animal = function (animalName, animalImage, strong, wise, resourceful, cunning, noble, loyal, loner, smallgroup, 
	largegroup, water, land, arctic, forest, river, mountain) {
	this.animalName = animalName;
	this.animalImage = animalImage;
	this.strong = strong;
	this.wise = wise;
	this.resourceful = resourceful;
	this.cunning = cunning;
	this.noble = noble;
	this.loyal = loyal;
	this.loner = loner;
	this.smallgroup = smallgroup;
	this.largegroup = largegroup;
	this.water = water;
	this.land = land;
	this.arctic = arctic;
	this.forest = forest;
	this.river = river;
	this.mountain = mountain;
	this.score = 0
};

var animalData = [
	['wolf', 'img/wolf.jpg', true, false, true, true, false, false, false, true, false, false, true, false, true, false, false],
	['eagle', 'img/eagle.jpg', true, true, true, false, false, false, true, false, false, false, true, false, false, false, false],
	['penguin', 'img/penguin,jpg', false, false, true, false, true, true, false, false, true, true, false, true, false, false, false],
	['bear', 'img/bear.jpg', true, true, false, true, false, false, true, false, false, false, true, false, true, false, false],
	['squirrel', 'img/squirrel.jpg', false, true, true, true, false, false, false, true, false, false, true, false, true, false, false],
	['salmon', 'img/salmon.jpg', true, false, true, false, true, false, false, false, true, true, false, false, false, true, false]
];

var animalObjects = [];

var questionNumber = 0;

var questions = ['Here is question 1?', 'Here is question 2?', 'Here is question 3?', 'Here is question 4?'];

var a1Text = ['<label for="A1">Here is Q1 answer 1 +1 strong</label>', 
				'<label for="A1">Here is Q2 answer 1 +1 strong</label>', 
				'<label for="A1">Here is Q3 answer 1 +1 strong</label>',
				'<label for="A1">Here is Q4 answer 1 +1 strong</label>'];
var a2Text = ['<label for="A2">Here is Q1 answer 2 +1 resourceful</label>',
				'<label for="A2">Here is Q2 answer 2 +1 resourceful</label>',
				'<label for="A2">Here is Q3 answer 2 +1 resourceful</label>',
				'<label for="A2">Here is Q4 answer 2 +1 resourceful</label>'];
var a3Text = ['<label for="A3">Here is Q1 answer 3 +1 wise</label>',
				'<label for="A3">Here is Q2 answer 3 +1 wise</label>',
				'<label for="A3">Here is Q3 answer 3 +1 wise</label>',
				'<label for="A3">Here is Q4 answer 3 +1 wise</label>'];

var Answer = function (id, type, name, attr) {
	this.id = id;
	this.type = type;
	this.name = name;
	this.attr = attr
}

var a1Attr = [
	new Answer ('A1', 'radio', 'vacation', 'strong'),
	new Answer ('A1', 'radio', 'vacation', 'strong'),
	new Answer ('A1', 'radio', 'vacation', 'strong'),
	new Answer ('A1', 'radio', 'vacation', 'strong')]

var a2Attr = [
	new Answer ('A2', 'radio', 'vacation', 'resourceful'),
	new Answer ('A2', 'radio', 'vacation', 'resourceful'),
	new Answer ('A2', 'radio', 'vacation', 'resourceful'),
	new Answer ('A2', 'radio', 'vacation', 'resourceful')]

var a3Attr = [
	new Answer ('A3', 'radio', 'vacation', 'wise'),
	new Answer ('A3', 'radio', 'vacation', 'wise'),
	new Answer ('A3', 'radio', 'vacation', 'wise'),
	new Answer ('A3', 'radio', 'vacation', 'wise')]

for(var i=0; i<animalData.length; i+=1){
	var newAnimal = new Animal(animalData[i][0], animalData[i][1], animalData[i][2], animalData[i][3], 
		animalData[i][4], animalData[i][5], animalData[i][6], animalData[i][7], animalData[i][8], 
		animalData[i][9], animalData[i][10], animalData[i][11], animalData[i][12], animalData[i][13],
		animalData[i][14], animalData[i][15], animalData[i][16]);
	animalObjects.push(newAnimal);
};


function setAttribute(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

var questionBuilder = function () {
	var form = document.getElementById('form');
	var question = document.createElement('div');
	setAttribute(question, {'id':'question'});
	form.appendChild(question);
	qTextEl = document.createElement('p');
	qTextEl.innerHTML = questions[questionNumber];
	question.appendChild(qTextEl);

	var a1Input = document.createElement('input');
	setAttribute(a1Input, a1Attr[questionNumber]);
	question.appendChild(a1Input)
	var a1 = document.createElement('label');
	a1.innerHTML = a1Text[questionNumber];
	question.appendChild(a1);
	question.appendChild(document.createElement('br'));

	var a2Input = document.createElement('input');
	setAttribute(a2Input, a2Attr[questionNumber]);
	question.appendChild(a2Input)
	var a2 = document.createElement('label');
	a2.innerHTML = a2Text[questionNumber];
	question.appendChild(a2);
	question.appendChild(document.createElement('br'));

	var a3Input = document.createElement('input');
	setAttribute(a3Input, a3Attr[questionNumber]);
	question.appendChild(a3Input)
	var a3 = document.createElement('label');
	a3.innerHTML = a3Text[questionNumber];
	question.appendChild(a3);
	question.appendChild(document.createElement('br'));

	var inputButton = document.createElement('button');
	setAttribute(inputButton, {'type':'click', 'value':'submit', 'id':'inputButton'});
	inputButton.textContent='Submit';
	question.appendChild(inputButton);
	inputButton.addEventListener('click', valueScore);
};


var valueScore = function (event) {
	event.preventDefault();
	for (var i = 0; i < animalObjects.length; i++) {
		if (document.getElementById('A1').checked == true && animalObjects[i][a1Attr[questionNumber].attr] == true) {
			animalObjects[i].score += 1;
		} else if (document.getElementById('A2').checked == true && animalObjects[i][a2Attr[questionNumber].attr] == true) {
			animalObjects[i].score += 1;
		} else if (document.getElementById('A3').checked == true && animalObjects[i][a3Attr[questionNumber].attr] == true) {
			animalObjects[i].score += 1;
		}
		}
	var element = document.getElementById('question');
	element.parentNode.removeChild(element);
	questionNumber += 1;
	if (questionNumber < questions.length) {
		questionBuilder();
	} else {
		localStorage.setItem('animals', JSON.stringify(animalObjects));
		window.location.href = "output.html";
	}

};

questionBuilder();












