function returnMultiplicationTable(input){
    let result = '';
    for(let i = 1; i <= 10; i++){
        result += input + ' x ' + i + ' = ' + (input * i);
        if(i < 10){
            result += '\n';
        }
    }
    return result;
}

function returnEvenOddMessage(input){
    let message = '';
    let result;
    if(input % 2 === 0){
        result = " is even.";
    }else{
        result = " is odd.";
    }
    message += input + result;
    return message;
}

function returnTenEvenOddMessages(){
    let result = "";
    let rando = Math.floor(Math.random() * (200 - 20 + 1) ) + 20;
    for(let i = 1; i <= 10; i++){
        result += returnEvenOddMessage(getRandomInt(20, 200));
        if(i < 10){
            result += '\n';
        }
    }
    return result;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function returnNumberSail(){
    let result = '';
    for(let i = 1; i <=9; i++){
        for(let j = 0; j < i; j++){
            result += i;
        }
        if(i < 9){
            result += '\n';
        }
    }
    return result;
}

function returnCountDownFrom100InFives(){
    let result = "";
    for(let i = 100; i > 0; i -= 5){
        result += i;
    if(i > 5){
        result += '\n';
    }
    }
    return result;
}
