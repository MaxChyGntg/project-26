
//Number Guessing Games


const minNum = 1;
const maxNum  = 100;
const random = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
let input = document.getElementById("input");
let submit = document.getElementById("submit")
let answer = document.getElementById("answer")
let attemps = 0;


submit.onclick = function() {

    let guess = document.getElementById("input").value;
    guess = Number(guess);

    if(isNaN(guess)){
        answer.textContent = "Enter valid Number";
    }
    else if(guess < minNum || guess > maxNum){
        answer.textContent = "Enter valid Number";
}   
else {
    attemps++;
     if(guess > random){
        answer.textContent = "Its To high";
    }
    else if(guess < random){
        answer.textContent = "Its To Low";
    }
    else if(attemps === 1){
        answer.textContent = `What TF??!, you are a cheater or just Lucky!!`;
    }
    else if(attemps === 3){
        answer.textContent = `Thats quick thooo 😮 you just need ${attemps} times to try`;
    }
    else{
        answer.textContent = `The answer is ${random} and you tried ${attemps}x`;
    }
}
}

console.log(random);
