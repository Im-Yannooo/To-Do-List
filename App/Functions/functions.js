export function addTask(taskText){

    const task = document.createElement('li');
    task.className = "Task";

    const checker = document.createElement('button');
    checker.className = "Checker";

    const detail = document.createElement('div');
    detail.className = "Detail";

    const taskName = document.createElement('p');
    taskName.className = "TaskName";
    taskName.textContent = taskText;

    const timeInfo = document.createElement('div');
    timeInfo.className = "TimeInfo";

    const timeImage = document.createElement('img');
    timeImage.src = "./Images/109613.png";
    timeImage.className = "TimeImage";

    const timeAdded = document.createElement('p');
    timeAdded.className = "TimeAdded";
    timeAdded.textContent = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

    const flagImage = document.createElement('img');
    flagImage.className = "FlagImage";

    timeInfo.appendChild(timeImage);
    timeInfo.appendChild(timeAdded);

    detail.appendChild(taskName);
    detail.appendChild(timeInfo);

    task.appendChild(checker);
    task.appendChild(detail);
    task.appendChild(flagImage);

    return task;
}