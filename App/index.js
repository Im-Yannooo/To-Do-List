const addTaskButton = document.getElementById("AddButton");
const mainBodyDisplay = document.getElementById("MainBody");

addTaskButton.addEventListener('click', function(){
    const textInput = document.querySelector("#TaskName");
    console.log(textInput.value);
});

console.log("it works");