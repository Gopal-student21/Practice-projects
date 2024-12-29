let name = document.querySelector(".name");
  let gender = document.querySelector(".gender");
  let email = document.querySelector(".Email");
  let locatioFeild = document.querySelector(".location");
  let phone = document.querySelector(".phone");
  let ID = document.querySelector(".id");
  let Password = document.querySelector(".Password");
 

 document.querySelector(".container>button").addEventListener( "click", async()=> {
  let h2 =document.getElementById("remove")
  let info= document.getElementById("on")
  h2.classList.add("hold")
  info.classList.remove("hold")
  let response = await fetch('/api/random-data')
    let data = await response.json();
    console.log(data);
    name.innerText = data.name;
    gender.innerText = data.gender
    email.innerText = data.email;
    locatioFeild.innerText = data.locationFeild;
    phone.innerText = data.phone;
    ID.innerText = data._id;
    Password.innerText = data.Password;
})

