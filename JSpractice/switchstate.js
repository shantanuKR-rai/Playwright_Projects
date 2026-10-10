const num1 = 10;
const num2 = 5;
const operator = "/";

switch (operator) {
    case "+": {
        console.log(num1 + num2);
        break;
    }
    case "-": { console.log(num1 - num2); break;}
    case "*": { console.log(num1 * num2); break;}
    case "/": { console.log(num1 / num2); break;}
    default:{console.log('invalid operator')}
}

const day = 4;
switch(day){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:{ console.log("Weekday"); break;}
    case 6:
    case 7:{ console.log("Weekend"); break;}
    default:{console.log('invalid day')}
}