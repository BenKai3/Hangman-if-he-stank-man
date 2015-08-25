var word = '';
var wrongCounter = 0;
var correctCounter = 0;
var alphaString = 'abcdefghijklmnopqrstuvwxyz';

function addWordToPage(){
	word = document.getElementById('input').value;
	document.getElementById('input').className = 'hidden';
	document.getElementById('start').className = 'hidden';
	for (var i = 0; i < word.length; i++) {
		document.getElementById('word').insertAdjacentHTML('beforeend', '<h1 class="wordLetter">_</h1>');
	};
}

window.onload = function(){
	for (var i = 0; i < alphaString.length; i++) {
		document.getElementById('letterChoices').insertAdjacentHTML('beforeend','<p id="'+alphaString[i]+'">'+alphaString[i]+'</p>');
	};
	var letters = document.getElementsByTagName('p')
	for (var i = 0; i < letters.length; i++) {
		letters[i].onclick = function(){
			var id = this.id;
			pickLetter(id);
		};
	};
};

function newGame(){
	word = '';
	wrongCounter = 0;
	correctCounter = 0;
	document.getElementById('word').innerHTML = '';
	var hiddenElements = document.getElementsByClassName('hidden');
	for (var i = 0; i < hiddenElements.length; i++) {
		hiddenElements[i].className = '';
	};
};

function pickLetter(letter){
	document.getElementById(letter).className = 'chosen';
	var wordLetters = document.getElementsByClassName('wordLetter');
	var counter = 0;
	for (var i = 0; i < word.length; i++) {
		if(word[i] == letter){
			counter++;
			correctCounter++;
			wordLetters[i].innerHTML = letter;
			if (correctCounter == word.length) {
				var alphabet = document.getElementsByTagName('p');
				for (var i = 0; i < alphabet.length; i++) {
					alphabet[i].className = 'chosen';
				};
				break;
			};
		}
		else if(i == word.length-1 && counter == 0){
			wrongCounter++;
			if (wrongCounter > 8) {
				document.getElementById('game').className = 'hidden';
				document.getElementById('body').insertAdjacentHTML('beforeend', '<h1 id="lost" onclick="newGame()">Aw, he dead. :( <br>Click here to revive the poor guy and play again!</h1>');
			};
			document.getElementById('manImage').src = 'img/'+wrongCounter+'.png';
		};
	};
}
