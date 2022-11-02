document.querySelector('#pushMon').onclick = function () {
    closeboard();
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
        document.getElementById("monText").value = "";
    }
}

document.querySelector('#pushTue').onclick = function () {
    closeboard();
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
        document.getElementById("tueText").value = "";
    }
}

document.querySelector('#pushWed').onclick = function () {
    closeboard();
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
        document.getElementById("wedText").value = "";
    }
}

document.querySelector('#pushThu').onclick = function () {
    closeboard();
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
        document.getElementById("thuText").value = "";
    }
}

document.querySelector('#pushFri').onclick = function () {
    closeboard();
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
    document.getElementById("friText").value = "";
}

document.querySelector('#pushSat').onclick = function () {
    closeboard();
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
    document.getElementById("satText").value = "";
}

document.querySelector('#pushSun').onclick = function () {
    closeboard();
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
    document.getElementById("sunText").value = "";
}

function funcOpen(whatButton) {

    var inputButton = document.getElementsByClassName("Button Name");

    for (var i = 0; i < inputButton.length; i++) {
        inputButton[i].style.display = "none";

    }
    document.getElementById(whatButton).style.display = "block";
}

function searchBoxClicked() {
    console.log('focus');
    var yourImg = document.getElementById('yourImgId');
    yourImg.style.height = '30%';
}

function closeboard() {
    var yourImg = document.getElementById('yourImgId');
    yourImg.style.height = '0%';
}

function open_todo_list() {
    document.getElementById('workout todo list').style.display = "";
    document.getElementById('start a workout').style.display = "none";
    document.getElementById('info').style.display = "none";
}

function personal_workout() {
    document.getElementById('workout todo list').style.display = "none";
    document.getElementById('start a workout').style.display = "";
    document.getElementById('info').style.display = "none";
}