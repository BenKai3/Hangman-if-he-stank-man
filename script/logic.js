var word = 'left';
var correctCounter = 0;
var wrongCounter = 0;
var alphaString = 'abcdefghijklmnopqrstuvwxyz';

// function inputWord(){
// 	document.body.insertAdjacentHTML('beforeend',
// 		''
// 	)
// }

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

};

function pickLetter(letter){
	document.getElementById(letter).className = 'chosen';
	for (var i = 0; i < word.length; i++) {
		if(word[i] == letter){
			correctCounter++;
			break;
		}
		else if(i == word.length-1){
			wrongCounter++;
			document.getElementById('manImage').src = 'img/'+wrongCounter+'.png';
		};
	};
}
