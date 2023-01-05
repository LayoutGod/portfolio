let preloader =  document.querySelector(".preloader")

let menu = document.querySelector(".menu")

let menuItems = document.querySelector(".menuItems")

let cancel = document.querySelector(".cancel")

let cancel2 = document.querySelector(".cancel2")

let link = document.getElementsByClassName("link")

let btn = document.querySelector(".btn")


function load() {
    preloader.style.display = 'none'
}

menu.addEventListener('click', ()=>{
    menuItems.classList.add("showmenu")
    menu.classList.add("menuItems")
    cancel2.classList.add("menu")
    cancel.classList.add("menu")
})


cancel.addEventListener('click', ()=>{
    menuItems.classList.remove("showmenu")
    cancel.classList.remove("menu")
    menu.classList.remove("menuItems") 
})


cancel2.addEventListener('click', ()=>{
    menuItems.classList.remove("showmenu")
    cancel2.classList.remove("menu")
    menu.classList.remove("menuItems") 
})

for(let i = 0; i < link.length; i++){
    link[i].addEventListener('click', ()=>{
        menuItems.classList.remove("showmenu")
        cancel2.classList.remove("menu")
        menu.classList.remove("menuItems") 
    })
}

let nameBox = document.querySelector(".name")
nameBox.style.outline = 'red'

function validateForm() {
    let x = nameBox.value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        x.style.outline = 'red'
        return false;
    } else if (x.length < 7) {
        alert("Name must be more than 7 characters");
        return false;
    } else {
        alert('Only receiving mails at this time')
        return false;
    } 
}

btn.addEventListener('click', ()=>{
    validateForm()
})

