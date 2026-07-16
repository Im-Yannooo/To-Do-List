const addTaskButton = document.getElementById("AddButton");
const mainBodyDisplay = document.getElementById("MainBody");

addTaskButton.addEventListener('click', function(){
    const textInput = document.querySelector("#TaskName");
    const list = document.createElement(`li`);

    if(textInput.value === ""){
        alert("Must input a task name to add!");
    }else{
        list.textContent = textInput.value;
        mainBodyDisplay.appendChild(list);
        textInput.value = "";
    }

});

console.log("it works");