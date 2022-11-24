const darkModeTheme = document.querySelector(".dmode")

function changeToDarkMode () {
    document.body.style.backgroundColor = "#3F4E4F"
    alert("done")
}

darkModeTheme.addEventListener('click', changeToDarkMode)