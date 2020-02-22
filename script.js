const question = document.getElementById('question');
const aAnswer = document.getElementById('A');
const bAnswer = document.getElementById('B');
const cAnswer = document.getElementById('C');
const dAnswer = document.getElementById('D');


let questionArray = [];
//let randomNumber = Math.floor(Math.random() * 51); 
let randomNumber = Math.floor(Math.random() * 50); 


getQuestion();


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

function updateDOM(){

    let randoNumber = [];
    let tempArr = [];
    let temp
    let i = 0;
    while( randoNumber.length < 3){
        temp = Math.floor(Math.random() * 3); 
       
      if(!randoNumber.includes(temp)){
          randoNumber[i] = temp;
         // console.log(randoNumber[i]);
          i++;
      }

    }

    
    tempArr[0] = questionArray.results[randomNumber].incorrect_answers[0];
    tempArr[1] = questionArray.results[randomNumber].incorrect_answers[1];
    tempArr[2] = questionArray.results[randomNumber].incorrect_answers[2];
    tempArr[3] =  questionArray.results[randomNumber].correct_answer;

    tempArr = shuffleArray(tempArr);
    console.log(questionArray);
    console.log(tempArr);
    

    question.innerHTML = `<p>${questionArray.results[randomNumber].question} </p>`
    aAnswer.innerHTML=`<span>${tempArr[0]}</span>`
    bAnswer.innerHTML=`<span>${tempArr[1]}</span>`
    cAnswer.innerHTML=`<span>${tempArr[2]}</span>`
    dAnswer.innerHTML=`<span>${tempArr[3]}</span>`


    /*
    question.innerHTML = `<p>${questionArray.results[randomNumber].question} </p>`
    aAnswer.innerHTML=`<span>${questionArray.results[randomNumber].incorrect_answers[0]}</span>`
    bAnswer.innerHTML=`<span>${questionArray.results[randomNumber].incorrect_answers[1]}</span>`
    cAnswer.innerHTML=`<span>${questionArray.results[randomNumber].incorrect_answers[2]}</span>`
    dAnswer.innerHTML=`<span>${questionArray.results[randomNumber].correct_answer}</span>`

    */
}

console.log("ww");

function getQuestion(){

    //let randomNumber = Math.floor(Math.random() * 50); 

    fetch("https://opentdb.com/api.php?amount=50&category=9&difficulty=easy&type=multiple")
    .then(res => res.json())
    .then( data => {

        questionArray = data;
        console.log(randomNumber);
        console.log(data.results);
        console.log(data.results[0].incorrect_answers[0]);
        console.log(data.results[0].incorrect_answers[1]);
        console.log(data.results[0].incorrect_answers[2]);
        
        updateDOM();
    })

}


//event listenr