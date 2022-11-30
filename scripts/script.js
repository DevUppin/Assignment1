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



function makeBlack(e) {
    if (e.target.tagName === "BUTTON") {
        e.target.style.backgroundColor = "black";
    }

}
darkModeTheme.addEventListener('click', makeBlack)

darkModeTheme.addEventListener('click', function onClick(event) {
  //Change text color for clicked element only
  event.target.style.color = 'white';
});
function NormButtonColr (event) {
    if (event.target.textContent === "Dark Mode") {
        event.target.style.backgroundColor = '#6F6A87'
    }
            
};

darkModeTheme.addEventListener('click', NormButtonColr)

const clickSave = document.querySelector(".tosave")

function alertUser () {
    prompt('Enter the title of the note:');
    alert('Your note has been saved')
    
}

clickSave.addEventListener('click', alertUser)

let noteList = ["note one", "note two"]
const noteElements = document.querySelector(".notes")

// function populateList (arr) {
//     for (let item of arr) {
//         let listItem = document.createElement("li")
//         listItem.textContent = item
//         noteElements.appendChild(listItem)
//     }

// }
clickSave.addEventListener('click', populateList)



const notesListElement = document.querySelector(".notes");
function populateList(arr)
{
    for (let item of arr){
        let listItem = document.createElement("li");
        listItem.textContent = item;
        notesListElement.appendChild(listItem);
    } // for (let i = 0); i < arr.length; i++ ) // arr.forEach()

}
clickSave.addEventListener('click', populateList)

