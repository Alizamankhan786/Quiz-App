                              //LOGIN PAGE STARTED

                            //   Page 1 STARTED



const form = document.querySelector(`form`);
const email = document.querySelector(`#email`);
const password = document.querySelector(`#password`);
const login = document.querySelector(`#btn-1`);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;


login.addEventListener(`click`, (event)=>{
    event.preventDefault()

    if(emailRegex.test(email.value) && passwordRegex.test(password.value)){
        let user = {
            email : email.value,
            password : password.value,
        }

        console.log(user);

        let userData = JSON.parse(localStorage.getItem(`login`));

        let userArr = userData || [];

        userArr.push(user)

        console.log(userArr);

        localStorage.setItem(`login`,JSON.stringify(userArr))
        console.log(userArr);
        email.value =  ``
        password.value =  ``


        alert(`Login Sucessfully`);
        window.location = `./quiz.html`

    }else{
        alert(`Please Enter Your Valid Email Or Password`);

    }

})




// let userArr;


// if(userData === null){
//     userArr = [];
// }else{
//     userArr=userData
// }


// login.addEventListener(`click`, (event)=>{
//     event.preventDefault()

//     localStorage.setItem(`user`,JSON.stringify(userArr))
//     console.log(userArr);
// });