// Запитувати у користувача число до тих пір, доки воно
// не буде більше 15 і менше 35 і кратне 6 (18,24,30 підходить)
// В користувача є 3 спроби

// зробити двома способами через while і for

const MIN_NUM = 15;
const MAX_NUM = 35;
let attempts_1 = 4;
let multiple = 6;

// for

for (let i = 1; i < attempts_1; i++) {
  const inputUser = Number(prompt("Enter Number, you have 3 attempts"));
  if (inputUser > MIN_NUM && inputUser < MAX_NUM) {
    if (inputUser % multiple === 0) {
      console.log("This is right");
      break;
    }
  }
  console.log(`try again: ${i} attempt`);
}

// // while

let count = 0;
let attempts_2 = 3;
while (count < attempts_2) {
  const inputUser = Number(prompt("Enter Number, you have 3 attempts"));

  if (inputUser > MIN_NUM && inputUser < MAX_NUM) {
    if (inputUser % multiple === 0) {
      console.log("This is right");
      break;
    }
  }
  count++;
  console.log(`try again: ${count} attempt`);
}

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
 */
const showGriitengs = function () {
  console.log("This is right");
};

/**
 *
 * @param {number} value
 */
const showAttempts = function (value) {
  console.log(`try again: ${value} attempt`);
};

/**
 *
 * @param {number} value
 * @param {number} MIN_NUM
 * @param {number} MAX_NUM
 * @returns {number, boolean}
 */
const checkRange = function (value, MIN_NUM = 15, MAX_NUM = 35) {
  if (value > MIN_NUM && value < MAX_NUM) {
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


for (let i = 1; i < attempts_1; i++) {
  const inputUser = checkInputUser(getUserInput());

  if (checkRange(inputUser)) {
    if (checkMultiplicity(inputUser)) {
      showGriitengs();
      break;
    }
  }
  showAttempts(i);
}
