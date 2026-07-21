const addTaskButton = document.getElementById("AddButton");
const mainBodyDisplay = document.getElementById("MainBody");
var list;

addTaskButton.addEventListener('click', function(){
    const textInput = document.querySelector("#TaskName");
    list = document.createElement(`li`);

    if(textInput.value === ""){
        alert("Must input a task name to add!");
    }else{
        list.textContent = textInput.value;
        textInput.value = "";
    }   

});



console.log("it works");w