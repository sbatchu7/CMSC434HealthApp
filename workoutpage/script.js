document.querySelector('#pushMon').onclick = function () {
    if (document.querySelector('#newtaskMon input').value.length == 0) {
        
    }

    else {
        document.querySelector('#tasksMon').innerHTML += `
            <div class="taskMon">
                <span id="tasknameMon">
                    ${document.querySelector('#newtaskMon input').value}
                </span>
                <button class="deleteMon">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".deleteMon");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    }
}

document.querySelector('#pushTue').onclick = function () {
    if (document.querySelector('#newtaskTue input').value.length == 0) {
        
    }

    else {
        document.querySelector('#tasksTue').innerHTML += `
            <div class="taskTue">
                <span id="tasknameTue">
                    ${document.querySelector('#newtaskTue input').value}
                </span>
                <button class="deleteTue">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".deleteTue");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    }
}

document.querySelector('#pushWed').onclick = function () {
    if (document.querySelector('#newtaskWed input').value.length == 0) {
        
    }

    else {
        document.querySelector('#tasksWed').innerHTML += `
            <div class="taskWed">
                <span id="tasknameWed">
                    ${document.querySelector('#newtaskWed input').value}
                </span>
                <button class="deleteWed">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".deleteWed");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    }
}

document.querySelector('#pushThu').onclick = function () {
    if (document.querySelector('#newtaskThu input').value.length == 0) {
        
    }

    else {
        document.querySelector('#tasksThu').innerHTML += `
            <div class="taskThu">
                <span id="tasknameThu">
                    ${document.querySelector('#newtaskThu input').value}
                </span>
                <button class="deleteThu">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".deleteThu");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    }
}

document.querySelector('#pushFri').onclick = function () {
    if (document.querySelector('#newtaskFri input').value.length == 0) {
        
    }

    else {
        document.querySelector('#tasksFri').innerHTML += `
            <div class="taskFri">
                <span id="tasknameFri">
                    ${document.querySelector('#newtaskFri input').value}
                </span>
                <button class="deleteFri">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".deleteFri");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    }
}

document.querySelector('#pushSat').onclick = function () {
    if (document.querySelector('#newtaskSat input').value.length == 0) {
        
    }

    else {
        document.querySelector('#tasksSat').innerHTML += `
            <div class="taskSat">
                <span id="tasknameSat">
                    ${document.querySelector('#newtaskSat input').value}
                </span>
                <button class="deleteSat">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".deleteSat");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    }
}

document.querySelector('#pushSun').onclick = function () {
    if (document.querySelector('#newtaskSun input').value.length == 0) {
        
    }

    else {
        document.querySelector('#tasksSun').innerHTML += `
            <div class="taskSun">
                <span id="tasknameSun">
                    ${document.querySelector('#newtaskSun input').value}
                </span>
                <button class="deleteSun">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".deleteSun");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    }
}

function funcOpen(whatButton) {

    var inputButton = document.getElementsByClassName("Button Name");

    for (var i = 0; i < inputButton.length; i++) {
        inputButton[i].style.display = "none";

    }
    document.getElementById(whatButton).style.display = "block";
}

function funcOpenKeyboard() {
    
}