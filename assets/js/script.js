// IMPORTS
import Students from "./studentClass.js";
import Career from "./careerClass.js";
import ESL from "./eslClass.js";
import {ESLMap} from "./programs.js";
import {CareerMap} from "./programs.js";


// VARIABLES
let btns = document.getElementsByTagName("button");

let modals = document.getElementsByClassName("modal");
let selectCourse = document.getElementsByClassName("selectCourse");

let inputBox = document.getElementsByTagName("input");
let controlLog = document.getElementsByClassName("controlLogin");
let controlReg = document.getElementsByClassName("controlRegister");

let blockForm = document.getElementsByTagName("form");


// Do modal and the courses you can select with display none
for(let i=0;i<modals.length;i++){
    modals[i].style.display = "none";
    selectCourse[i].style.display = "none";
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


// For not submit if the inputs are empty
blockForm[0].addEventListener("submit", (event) =>{
    if(!(CheckInput(controlLog))){
        event.preventDefault();
        alert("Please, fill all the information on the login form");
    }
});
blockForm[1].addEventListener("submit", (event) =>{
    let radioESL = document.querySelectorAll("input[name=students]")[0];
    let radioCareer = document.querySelectorAll("input[name=students]")[1];

    if(!(CheckInput(controlReg)) || (radioESL.checked == false) && (radioCareer.checked == false)){
        event.preventDefault();
        alert("Please, fill all the information on the register form");
    }
});


// EventListener that only let you type leters, delete if you have a mistake and delete
inputBox[0].addEventListener("keydown", (event) =>{
    if(!((event.keyCode>=65 && event.keyCode<=90) || (event.keyCode>=97 && event.keyCode<=122) || (event.keyCode==8))){
        // prevent that we dont write any number for our input
        event.preventDefault();
    }
});


// EventListener that only let you type leters, delete if you have a mistake and delete
for(let i=0;i<inputBox.length;i++){
    if((i==0) || (i==3) || (i==4)){
        inputBox[i].addEventListener("keydown", (event) =>{
            if(!((event.keyCode>=65 && event.keyCode<=90) || (event.keyCode>=97 && event.keyCode<=122) || (event.keyCode==8))){
                // prevent that we dont write any number for our input
                event.preventDefault();
            }
        });
    }
    if((i==5) || (i==8)){
        inputBox[i].addEventListener("keypress", (event) =>{
            if(!((event.keyCode>=48 && event.keyCode<=57) || (event.keyCode==45) || (event.keyCode==8))){
                // prevent that we dont write any number for our input
                event.preventDefault();
            }
        });
    }
}


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


// When you clicked on the radio button ESL the ESL programs will be display
inputBox[10].addEventListener("change", ()=>{
    let courseSelected = document.getElementsByClassName("selectCourse")[0];
    let courseNonSelected = document.getElementsByClassName("selectCourse")[1];
    courseNonSelected.style.display = "none";

    if(courseSelected.style.display = "none"){
        courseSelected.style.display = "block";
    }
});

// When you clicked on the radio button Career the Careers programs will be display
inputBox[11].addEventListener("change", ()=>{
    let courseSelected = document.getElementsByClassName("selectCourse")[1];
    let courseNonSelected = document.getElementsByClassName("selectCourse")[0];
    courseNonSelected.style.display = "none";

    if(courseSelected.style.display = "none"){
        courseSelected.style.display = "block";
    }
});