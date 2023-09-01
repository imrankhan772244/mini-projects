const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addTaskInput = document.getElementById("add");
inputBox.addEventListener("keypress", addTaskk);
inputBox.value='';

function addTask() {
  if (inputBox.value === "" || inputBox.value === " ")
    alert("please Enter something");
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
    saveData();
  }
  inputBox.value='';
}

function addTaskk(e) {
  if (e.key == "Enter") {
    if (inputBox.value === "" || inputBox.value === " ")
      alert("please Enter something");
    else {
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;
      listContainer.appendChild(li);
      let span=document.createElement("span");
      span.innerHTML="\u00d7";
      li.appendChild(span);
      inputBox.value=''; 
      saveData();   
  }
     
  } else {
    console.log("ENter some thing");
  }
  
}

listContainer.addEventListener('click',function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();
