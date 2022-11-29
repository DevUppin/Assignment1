const darkModeTheme = document.querySelector(".dmode")

function changeToDarkMode () {
    document.body.style.background = "#3F4E4F"
    
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
        e.target.style.backgroundColor = "white";
    }

}
darkModeTheme.addEventListener('click', makeWhite)

darkModeTheme.addEventListener('click', function onClick(event) {
  // 👇️ Change text color for clicked element only
  event.target.style.color = 'black';
});

function backToLight () { 
    if (darkModeTheme.textContent === 'Dark Mode') {
        document.body.style.backgroundColor = '#ECE2D0'

    }

}
darkModeTheme.addEventListener('click', backToLight)