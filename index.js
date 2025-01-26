// function signup(event){
// event.preventDefault();
// var firstname=document.getElementById("firstname");
// var lastname=document.getElementById("lastname");
// var email=document.getElementById("email");
// var password=document.getElementById("password");
// console.log(
//     firstname.value,
//     lastname.value,
//     email.value,
//     password.value
// )
// }


// function signup(event) {
//     event.preventDefault();
//     var model=document.getElementById("modal");
//     var form = document.forms.register;
//     var user = {
//         firstname: form.elements.firstname.value,
//         lastname: form.elements.lastname.value,
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//     }
//     console.log(user);
//     model.style.display="flex";
// }

// function closemodel(){
//     var modal=document.getElementById("modal");
//     modal.style.display="none";
// }




//global variables
var modal = document.getElementById("modal");
var modalBody = document.getElementById("modal-body");
var user = {}

function signUp(event) {
    event.preventDefault();
    modal.style.display = "flex";
    modal.className = "animate__animated animate__fadeIn";
    modalBody.className = "animate__animated animate__zoomIn";
    var form=document.forms.register;
    // user.firstname = form.elements.firstname.value;
    // user.lastname = form.elements.lastname.value;
    // user.email = form.elements.email.value;
    // user.password = form.elements.password.value;
    // console.log(user);

    var firstname = form.elements.firstname;
    if(firstname.value=="mr"){
        firstname.style.border="2px solid green";
        firstname.style.background="pink";
    }
    else{
        firstname.style.border="2px solid red";
         firstname.display.background="brown";
    }
}

function closemodel() {
    modal.style.display = "flex";
    modal.className = "animate__animated animate__fadeOut";
    modalBody.className = "animate__animated animate__zoomOut";
}


function signIn(event) {
    event.preventDefault();
    var form = document.forms.login;
    user.email = form.elements.email.value;
    user.password = form.elements.password.value;
    console.log(user);
}

