// Запитувати у користувача число до тих пір, доки воно
// не буде більше 15 і менше 35 і кратне 6 (18,24,30 підходить)
// В користувача є 3 спроби

// зробити двома способами через while і for

const MIN_NUM = 15;
const MAX_NUM = 35;
let attempts = 3;
let multiple = 6;

// for

// for (let i = 0; i < attempts; i++) {
//   const inputUser = Number(prompt("Enter Number, you have 3 attempts"));
//   if (
//     inputUser > MIN_NUM &&
//     inputUser < MAX_NUM &&
//     inputUser % multiple === 0
//   ) {
//     console.log("This is right");
//     break;
//   }
//   console.log(`try again: ${i + 1} attempt`);
// }

// while

// let count = 0;

// while (count < attempts) {
//   const inputUser = Number(prompt("Enter Number, you have 3 attempts"));

//   if (
//     inputUser > MIN_NUM &&
//     inputUser < MAX_NUM &&
//     inputUser % multiple === 0
//   ) {
//     console.log("This is right");
//     break;
//   }
//   count++;
//   console.log(`try again: ${count} attempt`);
// }

/*********************************************/
// СПРОБА зробити детерміновані та чисті функції

/**
 *
 * @returns {string}
 */
const getUserInput = function () {
  return prompt("Enter Number, you have 3 attempts");
};

/**
 *
 * @param {string} value
 * @returns {number}
 */
const checkInputUser = function (value) {
  return Number(value);
};

/**
 *
 * @returns {string}
 */
const showGriitengs = function () {
  return "This is right";
};

/**
 *
 * @param {number} value
 * @returns {string}
 */
const showAttempts = function (value) {
  return `try again: ${value} attempt`;
};

/**
 *
 * @param {string} text
 */
const showOutput = function (text) {
  console.log(text);
};

/**
 *
 * @param {number} value
 * @param {number} minNum
 * @param {number} maxNum
 * @returns {number, boolean}
 */
const checkRange = function (value, minNum = 15, maxNum = 35) {
  if (value > minNum && value < maxNum) {
    return value;
  }
  return false;
};

/**
 *
 * @param {number} value_1
 * @param {number} value_2
 * @returns {boolean}
 */
const checkMultiplicity = function (value_1, value_2 = 6) {
  return value_1 % value_2 === 0;
};

/**
 *
 */
function guessNumber() {
  for (let i = 0; i < attempts; i++) {
    const inputUser = checkInputUser(getUserInput());

    if (checkRange(inputUser) && checkMultiplicity(inputUser)) {
      showOutput(showGriitengs());
      break;
    }
    showOutput(showAttempts(i));
  }
}
guessNumber();
