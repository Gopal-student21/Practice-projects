const input = document.querySelector("input");
const button = document.querySelector("button");
const code = document.querySelector(".code")
const img = document.querySelector(".img-box");
function qr() {
    if (input.value === '') {
      input.classList.add("error");
      setTimeout(()=>{
        input.classList.remove("error");
      },1000);
    } else {
        console.log("hello world");
        code.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
        img.classList.add("show-img");
    }
}