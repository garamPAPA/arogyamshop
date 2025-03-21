let opne = document.querySelector(".header-baar i");
let baarlist =document.querySelector(".baar-list");
let closeicon = document.querySelector(".baar-list ul li i")

opne.addEventListener("click", ()=>{
   baarlist.style.display = 'flex'
})

closeicon.addEventListener("click", ()=>{
    baarlist.style.display = 'none'
 })
 