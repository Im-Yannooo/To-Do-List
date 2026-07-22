import {addTask} from './Functions/functions.js';

const addTaskButton = document.getElementById("AddButton");
const mainBodyDisplay = document.getElementById("MainBody");

addTaskButton.addEventListener('click', function(){
    const textInput = document.querySelector("#TaskName");

    if(textInput.value === ""){
        alert("Must input a task name to add!");
    } else {

        const newTask = addTask(textInput.value);

        newTask.addEventListener('click', function(){
            this.remove();
        });

        mainBodyDisplay.appendChild(newTask);

        textInput.value = "";
    }
});