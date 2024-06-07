const div = document.querySelector(`#quiz-item`);
const btn = document.querySelector(`#btn`);

let index = 0
let questionArr = [];



const renderQuestion = (arr) =>{
    if(index < questionArr.length){
        const answerArr = [
            ...arr[index].incorrectAnswers,
            arr[index].correctAnswers,
        ];
    console.log(answerArr);
        div.innerHTML += `
        <h3 class="text-light"> Q${index + 1}:  ${arr[index].question.text}</h3>

        <ul class="text-light">
        ${answerArr.map((items) => `<li>${items}</li>`)}
        </ul>
        `
    }else{
        console.log(`Questions Completed`);
    }
};

btn.addEventListener(`click` , ()=>{
    div.innerHTML = ``;
    index += 1;
    renderQuestion(questionArr);
});




const getQuestion  = async () => {
    try {
        const data = await fetch(`https://the-trivia-api.com/v2/questions`);
        const response = await data.json();
        console.log(response);
        questionArr = (response);
        renderQuestion(response);
        
    } catch (error) {
        console.log(`error ===>` , error );
    }

};

getQuestion();

