var demineur = $('#demineur'),
	bomb,
	boxes = parseInt(prompt("Entrer le nombre de cases désirées"));

function randomNumber(min, max){
	return Math.floor(Math.random()*(max-min+1)+min);
}

function gridDefinition(boxes){
	return Math.round(Math.sqrt(boxes));
}

function createDemineur(numberOfBoxes){

	if(numberOfBoxes >= 2){

		//Draw the boxes needed
		for(var i = 1; i < numberOfBoxes+1; i++){
			demineur.append("<div class='box'></div>");
		}

		//Define which box is the bomb
		var randomBomb = randomNumber(1, numberOfBoxes);
		var setOfBoxes = demineur.find('.box');

		if(setOfBoxes.length){
			bomb = setOfBoxes.eq(randomBomb).addClass('bomb');
		}

		//Define where the grid should break to make it as a square
		var gridBreak = gridDefinition(numberOfBoxes);
		demineur.css({
			width : bomb.outerWidth() * gridBreak
		})

		//On Click event, check if box is a bomb or not
		setOfBoxes.on('click', function(e){
			if($(this).hasClass('bomb')){
				$(this).css('backgroundColor', 'red');
				alert('Vous avez perdu');
			} else {
				$(this).css('backgroundColor', 'green');
			}
		})

	} else {

		alert('Vous n\'avez pas défini assez de cases pour jouer');
		boxes = parseInt(prompt("Entrer un nombre supérieur ou égal à 2"));
		createDemineur(boxes);

	}
};

createDemineur(boxes);



