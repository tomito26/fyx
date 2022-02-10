const links = document.querySelectorAll(" .job-links ul a");
console.log(links)
links.forEach(link => {
    link.addEventListener("click",function(){
        let current = document.querySelector(".job-links ul .activatedLink");
        console.log(current)
        current.className = current.className.replace("activatedLink","");
        this.className += "activatedLink";
    })
});