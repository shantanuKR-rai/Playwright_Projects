let number = 12345;
let n = number;
let count = 0;
let sum = 0;

do { n=number%10
        sum=sum+n;
    count++;
    number=Math.floor(number/10);
} while (number>0);

console.log(`Digits: ${count}`);
console.log(`Sum: ${sum}`);

const correctPassword = "js123";
const attempts = ["abc", "js123", "x"];

let i = 0;
let loggedIn = false;

do {
  const pass = attempts[i];

  if (pass === correctPassword) {
    console.log(`Attempt ${i + 1}: ${pass} - Correct`);
    loggedIn = true;
  } else {
    console.log(`Attempt ${i + 1}: ${pass} - Wrong`);
  }

  i++;
} while (!loggedIn && i < 3);

if (loggedIn) {
  console.log(`Login successful after ${i} attempt(s)`);
} else {
  console.log("Account locked");
}