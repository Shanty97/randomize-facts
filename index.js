let dynamicSection = document.querySelector('#quoteSection');
let outputQuote = document.querySelector('#resultQuote');

//let numInput = document.querySelector('#numInput');
//console.log('1',numInput);

const types = ['Numbers','Math','Date'];

//Manipulate input from select
let optionList = document.querySelector('#typeOfFact');
optionList.addEventListener('change', findType);
let rootDiv = document.querySelector('#rootDiv');

let wordCounter = 0;
		let letterCouter = 0;
		let currentWord = '';
		let currentLetter = '';
		let sequenceCounter = 0;
(function typingEffect() {
		
		

		//reset counter for infinte effect
		if(wordCounter === types.length) {
			wordCounter = 0;
			sequenceCounter = 0;
		}
		
		//grab current word and it's letter
		currentWord = types[wordCounter];
		currentLetter = currentWord.slice(0, ++letterCouter);

		
		//document.querySelector('.dynamicText').classList.add("newAnimation");

		document.querySelector('.dynamicText').textContent = currentLetter;
		
		//reset counters after each word 
		if(currentLetter.length === currentWord.length) {
			wordCounter++;
			letterCouter = 0;

			
			
			sequenceCounter++;	
		}

		setTimeout(typingEffect, 500);


	}())


function findType() {
	let selectedOption = optionList.selectedIndex;
	console.log('selected option is',selectedOption);
	if(selectedOption == 1) {
		createInput(selectedOption);
		
		

	}
	else if(selectedOption == 2) {
		createInput(selectedOption);
		
		
	}
	else if(selectedOption == 3) {
		createInput(selectedOption);
	}
	else if(selectedOption == 0) {
		createInput(selectedOption);
	}

}



function createInput(selectedOption) {
	

		if(selectedOption == 1) {
			while(rootDiv.hasChildNodes()) {
			rootDiv.removeChild(rootDiv.firstChild);
			
			}
			var numInput = document.createElement('input');
			numInput.setAttribute('type','number');
			numInput.id = 'triviaInput';
			numInput.setAttribute('placeholder','Enter Random Number');
			numInput.classList.add('form-control','form-control-large','mt-3');
			rootDiv.appendChild(numInput);
			numInput.addEventListener('input', getQuote);
		}
		else if(selectedOption == 2) {
			while(rootDiv.hasChildNodes()) {
			rootDiv.removeChild(rootDiv.firstChild);
			
			}
			var numInput = document.createElement('input');
			numInput.setAttribute('type','number');
			numInput.id = 'mathInput';
			numInput.setAttribute('placeholder','Enter Random Math Number');
			numInput.classList.add('form-control','form-control-large','mt-3');
			rootDiv.appendChild(numInput);
			numInput.addEventListener('input', getMathQuote);
		}
		else if(selectedOption == 3) {
			while(rootDiv.hasChildNodes()) {
				
				rootDiv.removeChild(rootDiv.lastChild);

				
			}
			dynamicSection.style.display = 'none';
			console.log(rootDiv);
			var numInput1 = document.createElement('input');
			numInput1.setAttribute('type','number');
			numInput1.id = 'monthInput';
			numInput1.setAttribute('placeholder','Enter a Month Number (1-12)');
			numInput1.classList.add('form-control','form-control-large','mt-3');
			rootDiv.appendChild(numInput1);

			var numInput2 = document.createElement('input');
			numInput2.setAttribute('type','number');
			numInput2.id = 'dayInput';
			numInput2.setAttribute('placeholder','Enter a Day of the Month');
			numInput2.classList.add('form-control','form-control-large','mt-3');
			rootDiv.appendChild(numInput2);

			numInput1.addEventListener('input', getDateQuote);
			numInput2.addEventListener('input', getDateQuote);
		}
		else {
			while(rootDiv.hasChildNodes()) {
				
				rootDiv.removeChild(rootDiv.lastChild);

				
			}
			dynamicSection.style.display = 'none';
		}
}



//Fetch Data from api
function getQuote()  {
	let numInput = document.querySelector('#triviaInput');
	let xhr = new XMLHttpRequest();
	let validurl = 'http://numbersapi.com/'+numInput.value+'?default='+'Unfortunately we do not have a fact related to this number at this moment.';
	xhr.open('GET', validurl, true);

	xhr.onload = function() {
		if(this.status == 200 && numInput.value != '') {
			dynamicSection.style.display = 'block';
			outputQuote.innerHTML = this.responseText;
			
			
		}
		else {
			dynamicSection.style.display = 'none';
		}


	}

	xhr.send();
}

function getMathQuote()  {
	let numInput = document.querySelector('#mathInput');
	let xhr = new XMLHttpRequest();
	
	let validurl = 'http://numbersapi.com/'+numInput.value+'/math?default='+'Unfortunately we do not have a fact related to this number at this moment.';
	xhr.open('GET', validurl, true);

	xhr.onload = function() {
		if(this.status == 200 && numInput.value != '') {
			dynamicSection.style.display = 'block';
			outputQuote.innerHTML = this.responseText;
		}
		else {
			console.log(validurl);
			dynamicSection.style.display = 'none';
		}


	}

	xhr.send();
}

function getDateQuote()  {
	
	let numInput1 = document.querySelector('#monthInput');
	let numInput2 = document.querySelector('#dayInput');

	let xhr = new XMLHttpRequest();
	


	let validurl = 'http://numbersapi.com/'+numInput1.value+'/'+ numInput2.value +'/date?default='+'Unfortunately we do not have a fact related to this number at this moment.';
	xhr.open('GET', validurl, true);

	xhr.onload = function() {
		if(this.status == 200 && numInput1.value != '' && numInput2.value != '') {
			dynamicSection.style.display = 'block';
			outputQuote.innerHTML = this.responseText;
		}
		else {
			dynamicSection.style.display = 'none';
		}


	}

	xhr.send();
}

