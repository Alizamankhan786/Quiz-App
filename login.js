
const form = document.querySelector(`form`);
const email = document.querySelector(`#email`);
const password = document.querySelector(`#password`);
const login = document.querySelector(`#btn-1`);


let userArr;
let userData = JSON.parse(localStorage.getItem(`user`));


if(userData === null){
    userArr = [];
}else{
    userArr=userData
}


login.addEventListener(`click`, (event)=>{
    event.preventDefault()

    localStorage.setItem(`user`,JSON.stringify(userArr))
    console.log(userArr);
});