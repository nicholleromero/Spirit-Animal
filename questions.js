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
	this.mountain = mountain
}

var animalData = [
	['wolf', 'img/wolf.jpg', true, false, true, true, false, false, false, true, false, false, true, false, true, false, false],
	['eagle', 'img/eagle.jpg', true, true, true, false, false, false, true, false, false, false, true, false, false, false, false],
	['penguin', 'img/penguin,jpg', false, false, true, false, true, true, false, false, true, true, false, true, false, false, false],
	['bear', 'img/bear.jpg', true, true, false, true, false, false, true, false, false, false, true, false, true, false, false],
	['squirrel', 'img/squirrel.jpg', false, true, true, true, false, false, false, true, false, false, true, false, true, false, false],
	['salmon', 'img/salmon.jpg', true, false, true, false, true, false, false, false, true, true, false, false, false, true, false]
]

var q1Text = 'Here is question 1?';
var q2Text = 'Here is question 2?';
var q3Text = 'Here is question 3?';

var animalObjects = [];

for(var i=0; i<animalData.length; i+=1){
	var newAnimal = new Animal(animalData[i][0], animalData[i][1], animalData[i][2], animalData[i][3], 
		animalData[i][4], animalData[i][5], animalData[i][6], animalData[i][7], animalData[i][8], 
		animalData[i][9], animalData[i][10], animalData[i][11], animalData[i][12], animalData[i][13],
		animalData[i][14], animalData[i][15], animalData[i][16]);
	animalObjects.push(newAnimal);
}

var question = getElementById('question');
var q1Text = question.appendChild(q1Text);

var question1 = document.createElement('p');
  photo1.setAttribute('src', picArr[randomIndex1]);
  pic1.appendChild(photo1);


var question1 = document.getElementById('pic1');
  pic1Button.addEventListener('click', function() 













