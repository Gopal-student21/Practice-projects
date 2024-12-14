// getting the element in from the DOM
const input = document.getElementById("input2");
const task = document.getElementById("task");
// adding the task with the help of event listiner
function addTask() {
    // it will throw an alert of the the user gives empty input
    if(input.value === ''){
        alert('Please enter a task');
    }else{
        // it helps to create a new element and append it in the dom
        const li = document.createElement('li');
        li.innerHTML = input.value;
        task.append(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    // it help to make the input disappered after the input
    input.value ="";
    // function call
    setdata();
}
// it is used for the check the  list of the task 
task.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }else if(e.target.tagName === "SPAN"){
       e.target.parentElement.remove();
       savedata()
    }
},false);

// function for to save the data in the browser
function savedata(){
    localStorage.setItem("data",task.innerHTML);
}
// it is use to get the data  which is saved in the browser
function showdata(){
    task.innerHTML = localStorage.getItem("data");
}
showdata();