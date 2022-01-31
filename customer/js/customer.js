let ul = document.querySelector(".nav-links");
let li = document.querySelectorAll(".nav-link");

li.forEach(link =>{
    link.addEventListener("click",()=>{
        // e.preventDefault()
       li.forEach(navLink => navLink.classList.remove('active'));
        
        link.classList.add("active")
    })
})
// let activePage = window.location.pathname;
// let navLinks = document.querySelectorAll("nav a");
// navLinks.forEach(link=>{
//     console.log(link)
//     if(link.href.includes(`${activePage}`)){
//         link.classList.add("active")
//     }
// })
// console.log(activePage)