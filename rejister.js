
                                 // REGISTER STARTED

                                //  PAGE 2


const form = document.querySelector(`#form-1`);
const email = document.querySelector(`#email`);
const username = document.querySelector(`#username`);
const password = document.querySelector(`#password`);
// const password1 = document.querySelector(`#password1`);
const btn = document.querySelector(`#btn-2`);


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PasswordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;


btn.addEventListener(`click` , (event) => {
    event.preventDefault();

    if(emailRegex.test(email.value) && passwordRegex.test(password.value) && usernameRegex.test(username.value)){

        let user = {
            email : email.value,
            password : password.value,
            username : username.value,
        }
        console.log(user);

        let userData = JSON.parse(localStorage.getItem(`sign up`))

        let userArr = userData ||[];


        userArr.push(user);

        console.log(userArr);

        localStorage.setItem(`sign Up`,JSON.stringify(userArr))
        console.log(userArr);
        email.value = ``;
        username.value = ``;
        password.value = ``;


        alert(`Register Successfully`);


        window.location = `./quiz.html`
    }else{
        alert(`Please Enter Your Valid Information`);
    }
})