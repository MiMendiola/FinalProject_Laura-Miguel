// IMPORTS
import Students from "./studentClass.js";
import Career from "./careerClass.js";
import ESL from "./eslClass.js";
import {ESLMap} from "./programs.js";
import {CareerMap} from "./programs.js";


// VARIABLES
let btns = document.getElementsByTagName("button");

let modals = document.getElementsByClassName("modal");

let inputBox = document.getElementsByTagName("input");
let blockForm = document.getElementsByTagName("form");

// Do modal display none
for(let i=0;i<modals.length;i++){
    modals[i].style.display = "none";
}


// BUTTONS LOGIN AND REGISTER PART
// When user clicks on login show the login form and hide the register form
btns[0].addEventListener(("click"), ()=>{
    let modalSelected = document.querySelectorAll("div.modal")[0];
    let modalToHide = document.querySelectorAll("div.modal")[1];
    modalToHide.style.display = "none";

    if(modalSelected.style.display = "none"){
        modalSelected.style.display = "block";
    }
});

// When user clicks on register show the register form and hide the login form
btns[1].addEventListener(("click"), ()=>{
    let modalSelected = document.querySelectorAll("div.modal")[1];
    let modalToHide = document.querySelectorAll("div.modal")[0];
    modalToHide.style.display = "none";
    
    if(modalSelected.style.display = "none"){
        modalSelected.style.display = "block";
    }
});


// FORMS PART
// LOGIN FUNCTIONS AND PREVENTIONS
// See if all the inputs are fill or not
let CheckInput = (InputBoxes) =>{
    let flag = true;
    for (let i = 0; i < InputBoxes.length; i++) {
        if (InputBoxes[i].value == ""){
            flag = false;
        }
    }
    return flag;
}

// EventListener that only let you type leters, delete if you have a mistake and & . ,
inputBox[0].addEventListener("keydown", (event) =>{
    if(!((event.keyCode>=65 && event.keyCode<=90) || (event.keyCode>=97 && event.keyCode<=122) || (event.keyCode==8))){
        // prevent that we dont write any number for our input
        event.preventDefault();
    }
});

// Shows the password in the label
let showsOrHide_Pass = () =>{
    let label = document.getElementsByClassName("text")[0];
    let check = document.getElementById("see");

    if (check.checked == true) {
        inputBox[1].type = "text";
        label.innerHTML = "hide password"

    }else{
        inputBox[1].type = "password";
        label.innerHTML = "show password"
    }
}
inputBox[2].addEventListener("change", ()=>{
    showsOrHide_Pass();
})

// For not submit if the inputs are empty
blockForm[0].addEventListener("submit", (event) =>{
    if(!(CheckInput(inputBox))){
        event.preventDefault();
        alert("Please, fill all the information");
    }
});

