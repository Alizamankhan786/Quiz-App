const div = document.querySelector(`#quiz-item`);
const btn = document.querySelector(`#btn`);
let index = 0;
let result = 0;
let totalMarks = 0;
let questionArr = [];

function shuffleArray(Array){
    for (let i = Array.length -1; i > 0 ; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [Array[i] , Array[j]] = [Array[j] , Array[i]];
    }

    return Array;

}

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
        ${shuffleArray(answerArr).map((items) => `<li>
            
            <input type="checkbox" name="choice" class="choice" id="${items} value=${items}>

            <label for = ${items}>${items}</label>

            </li>`
        )}
        </ul>
        `;
    }else{
        console.log(`Show Result`);
        Window.location = "result.html";
        localStorage.setItem(
            "result",
            JSON.stringify({
                totalMarks,
                result,
            })
        );
    }
};

btn.addEventListener(`click` , ()=>{
    const choice = document.querySelectorAll(`.choice`);
    div.innerHTML = ``;
    choice.forEach((item) =>{
        if(item.checked){
            if(item.nextSibling.innerHTML === questionArr[index].correctAnswers){
                result += 10;
            }
        }
    });
    index += 1;
    renderQuestion(questionArr);
});


const getQuestion  = async () => {
    try {
        const data = await fetch(`https://the-trivia-api.com/v2/questions`);
        const response = await data.json();
        console.log(response);
        totalMarks = response.length * 10;
        questionArr = response;
        renderQuestion(response);
        
    } catch (error) {
        console.log(`error ===>` , error );
    }

};

getQuestion();

