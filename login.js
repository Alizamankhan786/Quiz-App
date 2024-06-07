
const form = document.querySelector(`form`);
const email = document.querySelector(`#email`);
const password = document.querySelector(`#password`);
const login = document.querySelector(`#btn-1`);


function storage(){
    localStorage.setItem(`email`, email.value);
    localStorage.setItem(`password`, password.value);

}

const arr = [];

login.addEventListener(`submit` , (event)=>{
    event.preventDefault()

    arr.email = email.value
    arr.password = password.value

    email.value = ``
    password.value = ``



    console.log(arr);
    storage()

})