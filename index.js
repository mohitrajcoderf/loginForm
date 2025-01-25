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


function signup(event) {
    event.preventDefault();
    var model=document.getElementById("modal");
    var form = document.forms.register;
    var user = {
        firstname: form.elements.firstname.value,
        lastname: form.elements.lastname.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
    }
    console.log(user);
    model.style.display="flex";
}

function closemodel(){
    var modal=document.getElementById("modal");
    modal.style.display="none";
}