/* This script and many more are available free online at
The JavaScript Source!! http://www.javascriptsource.com
Created by: Ilya Gerasimenko | http://www.gerasimenko.com */

// Text to type
var stringOfText1 = '... with a new string of text. Convenient for those "read more..." links.';
var stringOfText2 = ' spots on the same page; the animations will be consecutive.';
var stringOfText3 = 'Click (and keep clicking) here to retype this text over and over. You don\'t have to, but you can.';

// Animation
var textHolder;
var textTarget;
var letter;
var index;
var printing;
var waiting = false;

// Start

spellString = function (oId,str) {
 	if (waiting == false) {
  		index = 0;
  		waiting = true;
  		textTarget = document.getElementById(oId);
  		textTarget.innerHTML = '';
  		textHolder = str.split('');
  		sendToPrint();
 	}
}

// Animation

sendToPrint = function () {
 	if (index<textHolder.length) {
 		 printing = window.setTimeout(
    	 function () {
 					  getLetter(textTarget,index); 
 			},	1);
 	} else {
 		 waiting = false;
 	}
}

getLetter = function (textTarget,index) {
 	letter = document.createTextNode(textHolder[index]);
 	if (letter.value == '\\') letter.value = '';
 	printLetter(textTarget,letter);
}

printLetter = function (textTarget,letter) {
 	textTarget.appendChild(letter);
	 window.clearTimeout(printing);
	 index++;
	 sendToPrint();
}


// Created by: Simon Willison | http://simon.incutio.com/
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}
	
addLoadEvent(	function () {
		document.getElementById('clickhere1').onclick = function () {
		  		spellString('typehere1',stringOfText1);
  		}
		document.getElementById('clickhere2').onclick = function () {
				  spellString('typehere2',stringOfText2);
  		}
		document.getElementById('keepclicking').onclick = function () {
		  		spellString('keepclicking',stringOfText3);
  		}
  }
);
