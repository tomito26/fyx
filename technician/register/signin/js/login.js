

let form = document.querySelector("#customerLogin");
const warning = document.querySelector(".warning-text")
// console.log(warning)
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const email = document.querySelector(".userEmail").value;
    const password = document.querySelector(".userPassword").value;

    const users = JSON.parse(localStorage.getItem("users"));
    
    console.log(users)
    if(email !== "" && password !== ""){
        const technicians = users.filter(user => user.email === email);
        console.log(technicians)
        if(technicians[0] !== undefined){
            if(email === technicians[0].email && password === technicians[0].password){
            location.href = "/technician/technician.html"
            console.log(technicians[0].fullname)
            }else{
                warning.innerText = "You have entered  incorrect email or password"
            }
        }else{
            warning.innerText = "The email you entered does not exist"
        }
    }else{
        warning.innerText = "Please fill the details to login"
    }
    
    

    
})
// console.log(form)