document.querySelector('#pushMon').onclick = function () {
    if (document.querySelector('#newtaskMon input').value.length == 0) {
        alert("Please enter a Workout and the number of reps")
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
        alert("Please enter a Workout and the number of reps")
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

function funcOpen(whatButton) {

    var inputButton = document.getElementsByClassName("Button Name");

    for (var i = 0; i < inputButton.length; i++) {
        inputButton[i].style.display = "none";

    }
    document.getElementById(whatButton).style.display = "block";
}

function funcOpenKeyboard() {
    
}