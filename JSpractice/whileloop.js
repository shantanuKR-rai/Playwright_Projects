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

