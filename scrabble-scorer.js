// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  console.log (`Let's play some Scrabble!\n`); 
  let word = input.question (`Enter your word: `);
  console.log (oldScrabbleScorer(word))
  
    
};

function simpleScore(word) {
  return word.length


}


function vowelBonusScore(word) {
  let points = 0;
  let vowels = ["A", "E", "I", "O", "U"];
    word = word.toUpperCase()
  for (let i = 0; i < word.length; i++){
    if (vowels.includes(word[i])) {
      points = points + 3
    

  } else {
    points = points + 1
  }
  }

  return points

}

function scrabbleScore(word){
  
  /*let simpleObject = {
    name:"Simple Score", 
    description:"Each letter is worth 1 point.", 
    scoringFunction: simpleScore
  }
  let vowelObject = {
    name: "Bonus Vowels",
    description: "Vowels are 3 pts, consonants are 1 pt.",
    scoringFunction: bonusVowels
  } 
  let scrabbleObject = {
    name: "Scrabble",
    description: "The traditional scoring algorithm.",
    scoringFunction: scrabble
  }*/
}


  let simpleObject = {
    name:"Simple Score", 
    description:"Each letter is worth 1 point.", 
    scoringFunction: simpleScore
  };
  let vowelObject = {
    name: "Bonus Vowels",
    description: "Vowels are 3 pts, consonants are 1 pt.",
    scoringFunction: bonusVowels
  }; 
  let scrabbleObject = {
    name: "Scrabble",
    description: "The traditional scoring algorithm.",
    scoringFunction: scrabble
  }
const scoringAlgorithms = [
"simpleObject", "vowelObject", "scrabbleObject"]

function scorerPrompt() {}

function transform() {};

let newPointStructure;

function runProgram() {
  //  initialPrompt();
  let word = input.question(`Enter your word: `)
  console.log (vowelBonusScore(word))
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

