

function openNav(){
   document.getElementById('sidenav').style.width = '50%';
}

function closeNav(){
   document.getElementById('sidenav').style.width = '0%';
}


function showForm() {
document.getElementById('formElement').style.display = 'block';
}

function focusForm(){
var textbox = document.getElementById('formElement');
textbox.focus();
textbox.scrollIntoView();
}


function openPopup(){

   //document.getElementById('formElement').style.display = 'block';
   document.getElementById('popup').removeAttribute("hidden");
}

function closeForm(){
   document.getElementById('formElement').style.display = 'none';
}

function closePopup(){
    document.getElementById('popup').style.display = 'none';
}