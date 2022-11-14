// Запитувати у користувача число до тих пір, доки воно
// не буде більше 15 і менше 35 і кратне 6 (18,24,30 підходить)
// В користувача є 3 спроби

// зробити двома способами через while і for

const MIN_NUM = 15;
const MAX_NUM = 35;
let attempts = 4;
let multiple = 6;


// for

for (let i = 1; i < attempts; i++) {
  const inputUser = Number(prompt("Enter Number, you have 3 attempts"));
  if (inputUser > MIN_NUM && inputUser < MAX_NUM) {
    if (inputUser % multiple === 0) {
      console.log("This is right");
      break;
    }
  }
  console.log(`try again: ${i} attempt`);
}

// while

let count = 1;
while (count < attempts) {
  const inputUser = Number(prompt("Enter Number, you have 3 attempts"));

  if (inputUser > MIN_NUM && inputUser < MAX_NUM) {
    if (inputUser % multiple === 0) {
      console.log('This is right');
      break;
    }
  }
  count++;
  console.log(`try again: ${count} attempt`);
}










