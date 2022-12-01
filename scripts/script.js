const darkModeTheme = document.querySelector(".dmode")
const newNote = document.querySelector("newNote")

function changeToDarkMode () {
    document.body.classList.toggle("toDark")
    
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

const changeNNcolor = document.querySelector(".newNote")
const changeTScolor = document.querySelector(".tosave")
const changeCancel = document.querySelector('.cancelnote')

function makeBlack() {
    if (darkModeTheme.textContent === "Light Mode") {
        darkModeTheme.style.backgroundColor = "black";
        changeNNcolor.style.backgroundColor = 'black';
        changeTScolor.style.backgroundColor = 'black';
        changeCancel.style.backgroundColor = "#70121A"
    }
    else if (darkModeTheme.textContent === "Dark Mode") {
        darkModeTheme.style.backgroundColor = "#6F6A87";
        changeNNcolor.style.backgroundColor = '#5394A0';
        changeTScolor.style.backgroundColor = '#5394A0';
        changeCancel.style.backgroundColor = "#D9827C"

    }

}
darkModeTheme.addEventListener('click', makeBlack)

const clickSave = document.querySelector(".tosave")

function saveNote () {
    noteName = prompt('Enter the title of the note:');
    
    const ItemsInNotes = [noteName];
    const NotesElement = document.querySelector(".notes");

    function populateList(arr) {
        for (let item of arr) {
            let listItem = document.createElement("li");
            listItem.textContent = item;
            NotesElement.appendChild(listItem)
        }
       
    }
    populateList(ItemsInNotes);
    alert('Saved');


}
clickSave.addEventListener('click', saveNote)



