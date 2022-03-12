let btns = document.getElementsByTagName("button");

let loginForm = document.getElementById("btnLogin");
let registerForm = document.getElementById("btnRegister");

let modals = document.getElementsByClassName("modal");

for(let i=0;i<modals.length;i++){
    modals[i].style.display = "none";
}

btns[0].addEventListener(("click"), ()=>{
    let modalSelected = document.querySelectorAll("div.modal")[0];
    let modalToHide = document.querySelectorAll("div.modal")[1];
    modalToHide.style.display = "none";

    if(modalSelected.style.display = "none"){
        modalSelected.style.display = "block";
    }
});

btns[1].addEventListener(("click"), ()=>{
    let modalSelected = document.querySelectorAll("div.modal")[1];
    let modalToHide = document.querySelectorAll("div.modal")[0];
    modalToHide.style.display = "none";
    
    if(modalSelected.style.display = "none"){
        modalSelected.style.display = "block";
    }
});






