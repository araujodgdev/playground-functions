// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  }

  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let output = sentence.split(' ');
  return output;
}

// Desafio 4
function concatName(name) {
  let ultimoNome = name[name.length - 1];
  let primeiroNome = name[0];
  return `${ultimoNome}, ${primeiroNome}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numbers) {
  let biggestNumber = numbers.reduce(function (a, b) {
    return Math.max(a, b);
  }, -Infinity);
  let counter = 0;
  for (let number of numbers) {
    if (biggestNumber === number) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(mouse - cat1);
  let cat2Distance = Math.abs(mouse - cat2);

  if (cat1Distance > cat2Distance) {
    return 'cat2';
  }
  if (cat1Distance < cat2Distance) {
    return 'cat1';
  }
  if (cat1Distance === cat2Distance) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let output = [];
  for (let number of numbers) {
    if (number % 15 === 0) {
      output.push('fizzBuzz');
    } else if (number % 5 === 0) {
      output.push('buzz');
    } else if (number % 3 === 0) {
      output.push('fizz');
    } else {
      output.push('bug!');
    }
  }
  return output;
}

// Desafio 9
function encode() {
    let encoded = [];
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
