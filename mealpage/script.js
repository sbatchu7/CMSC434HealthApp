function funcOpen(whatButton) {
    
    var inputButton = document.getElementsByClassName("Button Name");

    for (var i = 0; i < inputButton.length; i++) {
      inputButton[i].style.display = "none";  
    
    }
    document.getElementById(whatButton).style.display = "block";  
}


  // Function for dropdown
  function dropSelect() {
      var inputOption  = document.getElementById("dropdownID");
      var display = inputOption.options[inputOption.selectedIndex].text;
      if (display.length == 3 || display.length == 4) {
          document.getElementById("txtValue").value = "Player 2 guesses their hat color is " + display ;
      }
      else {
          document.getElementById("txtValue").value = ""
      }
  }
  function dropRadio() {
      var color = document.querySelector('input[name = "groupColor"]:checked').value;
      document.getElementById("colorOption").value = "Player 1 guesses their hat color is " + color;
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_todo 

    var lst = document.getElementsByTagName("LI");

    for (var i = 0; i < lst.length; i++) {
        var string = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        string.className = "close";
        string.appendChild(txt);
        lst[i].appendChild(string);
    }

    var close = document.getElementsByClassName("close");

    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          this.parentElement.style.display = "none";
        }
    }

    var lst = document.querySelector('ul');

    lst.addEventListener('click', function(inputName) {
      if (inputName.target.tagName === 'LI') {
        inputName.target.classList.toggle('checked');
      }
    }
    , false);


    function newElement() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("myInput").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);

        if (inputValue === '') {
          alert("Item cannot be empty!");
        }
        else {
          document.getElementById("myUL").appendChild(li);
        }
        
        document.getElementById("myInput").value = "";
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
            this.parentElement.style.display = "none";
          }
        }
    }
    
  

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
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

function searchBoxClicked1() {
  console.log('focus');
  var yourImg = document.getElementById('yourImgId1');
  yourImg.style.height = '30%';
}