// Запитувати у користувача число до тих пір, доки воно
// не буде більше 15 і менше 35 і кратне 6 (18,24,30 підходить)
// В користувача є 3 спроби

// зробити двома способами через while і for

const MIN_NUM = 15;
const MAX_NUM = 35;

// for

for (let i = 1; i < 4; i++) {
  const inputUser = Number(prompt("Enter Number, you have 3 attempts"));
  if (inputUser > MIN_NUM && inputUser < MAX_NUM) {
    if (inputUser % 6 === 0) {
      console.log('This is right');
      break;
    }
  }
  console.log(`try again: ${i} attempt`);
}

// while

let count = 0;
while (count < 3) {
  const inputUser = Number(prompt("Enter Number, you have 3 attempts"));

  if (inputUser > MIN_NUM && inputUser < MAX_NUM) {
    if (inputUser % 6 === 0) {
      console.log('This is right');
      break;
    }
  }
  count++;
  console.log(`try again: ${count} attempt`);
}


