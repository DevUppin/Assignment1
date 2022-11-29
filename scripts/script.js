const darkModeTheme = document.querySelector(".dmode")

function changeToDarkMode () {
    document.body.style.background = '#36454F'
    
}
darkModeTheme.addEventListener('click', changeToDarkMode)

function changeTextButton () {
    if(darkModeTheme.textContent === "Dark Mode") {
        darkModeTheme.textContent = "Light Mode";
    }
    else if (darkModeTheme.textContent === "Light Mode") {
        darkModeTheme.textContent = "Dark Mode";
    }
}
darkModeTheme.addEventListener('click', changeTextButton)



function makeWhite(e) {
    if (e.target.tagName === "BUTTON") {
        e.target.style.backgroundColor = "black";
    }

}
darkModeTheme.addEventListener('click', makeWhite)

darkModeTheme.addEventListener('click', function onClick(event) {
  //Change text color for clicked element only
  event.target.style.color = 'white';
});

function backToLight (e) { 
    if (darkModeTheme.textContent === 'Dark Mode') {
        document.body.style.backgroundColor = '#ECE2D0';
        e.target.style.backgroundColor = '#6F6A87';
        e.target.style.color = 'white'


    }

}
darkModeTheme.addEventListener('click', backToLight)

const clickSave = document.querySelector(".tosave")

function alertUser () {
    prompt('Enter the title of the note:');
    alert('Your note has been saved')
    
}

clickSave.addEventListener('click', alertUser)

const list = []
document.getElementsByClassName("notes") = list

function pushNote () {
    list.push('one' , 'five');
    document.getElementsByClassName("notes") = list
}
clickSave.addEventListener('click', pushNote)