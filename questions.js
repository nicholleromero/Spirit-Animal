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

var q1Text = 'Here is question 1?';
var q2Text = 'Here is question 2?';
var q3Text = 'Here is question 3?';
var a1Text = '<label for="q1A1">Here is answer 1 +1 strong</label>';
var a2Text = '<label for="q1A2">Here is answer 2 +1 resourceful</label>';
var a3Text = '<label for="q1A3">Here is answer 3 +1 wise</label>';

var Answer = function (id, type, name, attr) {
	this.id = id;
	this.type = type;
	this.name = name;
	this.attr = attr
}

var q1A1Attr = new Answer ('q1A1', 'radio', 'vacation', 'strong');
var q1A2Attr = new Answer ('q1A2', 'radio', 'vacation', 'resourceful');
var q1A3Attr = new Answer ('q1A3', 'radio', 'vacation', 'wise');

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

var question = document.getElementById('question');
q1TextEl = document.createElement('p');
q1TextEl.innerHTML = q1Text;
question.appendChild(q1TextEl);

var a1Input = document.createElement('input');
setAttribute(a1Input, q1A1Attr);
question.appendChild(a1Input)
var a1 = document.createElement('label');
a1.innerHTML = a1Text;
question.appendChild(a1);
question.appendChild(document.createElement('br'));

var a2Input = document.createElement('input');
setAttribute(a2Input, q1A2Attr);
question.appendChild(a2Input)
var a2 = document.createElement('label');
a2.innerHTML = a2Text;
question.appendChild(a2);
question.appendChild(document.createElement('br'));

var a3Input = document.createElement('input');
setAttribute(a3Input, q1A3Attr);
question.appendChild(a3Input)
var a3 = document.createElement('label');
a3.innerHTML = a3Text;
question.appendChild(a3);
question.appendChild(document.createElement('br'));

var inputButton = document.createElement('button');
setAttribute(inputButton, {'type':'click', 'value':'submit'});
inputButton.textContent='Submit';
question.appendChild(inputButton);

var valueScore = function (event) {
	event.preventDefault();
	for (var i = 0; i < animalObjects.length; i++) {
		if (document.getElementById('q1A1').checked == true && animalObjects[i][q1A1Attr.attr] == true) {
			animalObjects[i].score += 1;
		} else if (document.getElementById('q1A2').checked == true && animalObjects[i][q1A2Attr.attr] == true) {
			animalObjects[i].score += 1;
		} else if (document.getElementById('q1A3').checked == true && animalObjects[i][q1A3Attr.attr] == true) {
			animalObjects[i].score += 1;
		}

		}
	console.log('A1 - ' + document.getElementById('q1A1').checked);
	console.log('A2 - ' + document.getElementById('q1A2').checked);
	console.log('A3 - ' + document.getElementById('q1A3').checked);
};




inputButton.addEventListener('click', valueScore);









	// for (var i = 0; i < animalObjects.length; i+=1) {
	// 	if (Answer.value == 'strong' && animalObjects[i].strong == true) {
	// 		animalObjects[i].score += 1;
	// 	} else if (Answer.value == 'wise' && animalObjects[i].wise == true) {
	// 		animalObjects[i].score += 1;
	// 	} else if (Answer.value == 'resourceful' && animalObjects[i].resourceful == true) {
	// 		animalObjects[i].score += 1;
	// 	} else if (Answer.value == 'cunning' && animalObjects[i].cunning == true) {
	// 		animalObjects[i].score += 1;
	// 	} else if (Answer.value == 'noble' && animalObjects[i].noble == true) {
	// 		animalObjects[i].score += 1;
	// 	} else if (Answer.value == 'loyal' && animalObjects[i].loyal == true) {
	// 		animalObjects[i].score += 1;
	// 	} else if (Answer.value == 'loner' && animalObjects[i].loner == true) {
	// 		animalObjects[i].score += 1;
	// 	} else if (Answer.value == 'smallgroup' && animalObjects[i].smallgroup == true) {
	// 		animalObjects[i].score += 1;
	// 	} else if (Answer.value == 'largegroup' && animalObjects[i].largegroup == true) {
	// 		animalObjects[i].score += 1;
	// 	} else if (Answer.value == 'water' && animalObjects[i].wate == true) {
	// 		animalObjects[i].score += 1;
	// 	} else if (Answer.value == 'land' && animalObjects[i].land == true) {
	// 		animalObjects[i].score += 1;
	// 	} else if (Answer.value == 'arctic' && animalObjects[i].arctic == true) {
	// 		animalObjects[i].score += 1;
	// 	} else if (Answer.value == 'forest' && animalObjects[i].forest == true) {
	// 		animalObjects[i].score += 1;
	// 	} else if (Answer.value == 'river' && animalObjects[i].river == true) {
	// 		animalObjects[i].score += 1;
	// 	} else if (Answer.value == 'mountain' && animalObjects[i].mountain == true) {
	// 		animalObjects[i].score += 1;
	// 	}
	// };
// setAttributes(a1, {"src": "http://example.com/something.jpeg", "height": "100%", ...});

// var question1 = document.createElement('p');
//   photo1.setAttribute('src', picArr[randomIndex1]);
//   pic1.appendChild(photo1);


// var question1 = document.getElementById('pic1');
//   pic1Button.addEventListener('click', function() 













