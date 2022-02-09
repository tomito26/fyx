const links = document.querySelectorAll(" .links ul a");
links.forEach(link => {
    link.addEventListener("click",function(){
        let current = document.querySelector(".graph .links ul li .activeLink");
        current.className = current.className.replace("activeLink","");
        this.className += "activeLink";
    })
})