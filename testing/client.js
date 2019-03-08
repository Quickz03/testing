console.log('testing is fun!');

function sum(number1, number2 ){
    if (number1 && number2){
        return Number(number1) + Number(number2);
    } else if (number1){
        return Number(number1);
    }else if (number2){
        return Number(number2)
    }
    return 0;
}

console.log('Test some of 1 and 1 expect 2:', sum(1, 1));
console.log(`Test sum of '1' and '1' expect 2`, sum('1', '1'));
console.log(`Test sum of 1 and '1' expect 2`, sum(1, '1'));
console.log(`Test sum of 1 and 'hello' expect Nam`, sum(1, 'hello'));
console.log(`Test sum of 1.5 and 1 expect 2.5`, sum(1.5, 1));
console.log(`Test sum of -1 and 1 expect 0`, sum(-1, 1));
console.log(`Test sum of 0 and 1 expect 1`, sum(0, 1));
console.log(`Test sum of 1/0 and 1 expect 1`, sum(1/0, 1));
console.log(`Test sum of undefined and 1 expect 1`, sum(undefined, 1));

console.log(`Test sum of 1 expect 1`, sum(1));
console.log(`Test sum with no arguements expect 0`, sum());