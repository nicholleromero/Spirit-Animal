var Animal = function (animalName, animalImage, strong, wise, resourceful, cunning, noble, loyal, loner, smallgroup, 
	largegroup, water, land, arctic, forest, river, mountain) {
	this.animalName = animalName; //Animal name, direct output to results page
	this.animalImage = animalImage; //Animal image location, direct output to results page
	this.strong = strong;
	this.wise = wise;
	this.resourceful = resourceful;
	this.cunning = cunning;
	this.noble = noble;
	this.loyal = loyal;
	this.loner = loner;						//Adds animal data -- if expanded add booleans to animalData subarrays
	this.smallgroup = smallgroup;
	this.largegroup = largegroup;
	this.water = water;
	this.land = land;
	this.arctic = arctic;
	this.forest = forest;
	this.river = river;
	this.mountain = mountain;
	this.score = 0  //Score tracker
};

var animalData = [ //All animal data is expandable, add new lines to the 2 dimensional array -pushed at line 34
	['wolf', 'img/wolf.jpg', true, false, true, true, false, false, false, true, false, false, true, false, true, false, false],
	['eagle', 'img/eagle.jpg', true, true, true, false, false, false, true, false, false, false, true, false, false, false, false],
	['penguin', 'img/penguin,jpg', false, false, true, false, true, true, false, false, true, true, false, true, false, false, false],
	['bear', 'img/bear.jpg', true, true, false, true, false, false, true, false, false, false, true, false, true, false, false],
	['squirrel', 'img/squirrel.jpg', false, true, true, true, false, false, false, true, false, false, true, false, true, false, false],
	['salmon', 'img/salmon.jpg', true, false, true, false, true, false, false, false, true, true, false, false, false, true, false]
];

var animalObjects = []; //Holds all animal information for scoring

for(var i=0; i<animalData.length; i+=1){ //Pushes all animal information with a 2 dimensional array loop
	for (var j=0; j<animalData[i].length; j +=1) {
	var newAnimal = new Animal(animalData[i][j]);
	animalObjects.push(newAnimal);
	};
};

var questionNumber = 0; //Control variable for ENTIRE SCRIPT!!!!

var questions = ['Here is question 1?', 'Here is question 2?', 'Here is question 3?', 'Here is question 4?'];
//Questions are expandable -- Add questions/answers/attributes -- no additional changes are necessary
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

var Answer = function (id, type, name, attr) { //Adds attributes to answer elements
	this.id = id;
	this.type = type;
	this.name = name;
	this.attr = attr
}
//ATTRIBUTES_________________________________________________________________
var a1Attr = [ //Answer 1 attributes
	new Answer ('A1', 'radio', 'vacation', 'strong'), //Q1
	new Answer ('A1', 'radio', 'vacation', 'strong'), //Q2
	new Answer ('A1', 'radio', 'vacation', 'strong'), //Q3
	new Answer ('A1', 'radio', 'vacation', 'strong')] //Q4

var a2Attr = [ //Answer 2 attributes
	new Answer ('A2', 'radio', 'vacation', 'resourceful'), //Q1
	new Answer ('A2', 'radio', 'vacation', 'resourceful'), //Q2
	new Answer ('A2', 'radio', 'vacation', 'resourceful'), //Q3
	new Answer ('A2', 'radio', 'vacation', 'resourceful')] //Q4

var a3Attr = [ //Answer 3 attributes
	new Answer ('A3', 'radio', 'vacation', 'wise'), //Q1
	new Answer ('A3', 'radio', 'vacation', 'wise'), //Q2
	new Answer ('A3', 'radio', 'vacation', 'wise'), //Q3
	new Answer ('A3', 'radio', 'vacation', 'wise')] //Q4
//___________________________________________________________________________

function setAttribute(el, attrs) { //Function to push attributes into HTML elements
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

var questionBuilder = function () { //builds HTML framework for question block
	var form = document.getElementById('form');    
	var question = document.createElement('div');
	setAttribute(question, {'id':'question'});  //Question
	form.appendChild(question);
	qTextEl = document.createElement('p');
	qTextEl.innerHTML = questions[questionNumber];
	question.appendChild(qTextEl);

	var a1Input = document.createElement('input'); //Answer 1
	setAttribute(a1Input, a1Attr[questionNumber]);
	question.appendChild(a1Input)
	var a1 = document.createElement('label');
	a1.innerHTML = a1Text[questionNumber];
	question.appendChild(a1);
	question.appendChild(document.createElement('br'));

	var a2Input = document.createElement('input'); //Answer 2
	setAttribute(a2Input, a2Attr[questionNumber]);
	question.appendChild(a2Input)
	var a2 = document.createElement('label');
	a2.innerHTML = a2Text[questionNumber];
	question.appendChild(a2);
	question.appendChild(document.createElement('br'));

	var a3Input = document.createElement('input'); //Answer 3
	setAttribute(a3Input, a3Attr[questionNumber]);
	question.appendChild(a3Input)
	var a3 = document.createElement('label');
	a3.innerHTML = a3Text[questionNumber];
	question.appendChild(a3);
	question.appendChild(document.createElement('br'));

	var inputButton = document.createElement('button');  //Submit button
	setAttribute(inputButton, {'type':'click', 'value':'submit', 'id':'inputButton'});
	inputButton.textContent='Submit';
	question.appendChild(inputButton);
	inputButton.addEventListener('click', valueScore);
};


var valueScore = function (event) {  //Scores answers and loads next question or results page
	event.preventDefault();
	for (var i = 0; i < animalObjects.length; i++) {  //2D loop controlled by questionNumber and animalObjects.length
		if (document.getElementById('A1').checked == true && animalObjects[i][a1Attr[questionNumber].attr] == true) {
			animalObjects[i].score += 1;   //Score for answer 1
		} else if (document.getElementById('A2').checked == true && animalObjects[i][a2Attr[questionNumber].attr] == true) {
			animalObjects[i].score += 1;   //Score for answer 2
		} else if (document.getElementById('A3').checked == true && animalObjects[i][a3Attr[questionNumber].attr] == true) {
			animalObjects[i].score += 1;   //Score for answer 3
		}
		}
	var element = document.getElementById('question');
	element.parentNode.removeChild(element); //Removes old question
	questionNumber += 1; //Moves to next question... Control variable for ENTIRE SCRIPT!!!!
	if (questionNumber < questions.length) {
		questionBuilder(); //Loads next question
	} else {
		localStorage.setItem('animals', JSON.stringify(animalObjects)); //Sends answers to local storage
		window.location.href = "output.html"; //Routes user to output page
	}

};

questionBuilder(); //Initial build of question












