let name = document.querySelector(".name");
let gender = document.querySelector(".gender")
let email = document.querySelector(".Email");
let locatioFeild = document.querySelector(".location");
let phone = document.querySelector(".phone");
let ID = document.querySelector(".id");
let Password = document.querySelector(".Password");

 async function data() {
    let a = await fetch('https://randomuser.me/api/');
    let b = await a.json();
    console.log(b);
    name.innerText = b.results[0].name.first + " " + b.results[0].name.last;
    gender.innerText = b.results[0].gender;
    email.innerText = b.results[0].email;
    locatioFeild.innerText = b.results[0].location.country +","+ b.results[0].location.city;
    phone.innerText = b.results[0].phone;
    ID.innerText = b.results[0].id.name;
    Password.innerText = b.results[0].login.password;
}
data();
