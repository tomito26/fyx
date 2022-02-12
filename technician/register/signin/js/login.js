function getLoginDetails(){
    let customer = sessionStorage.getItem("user")
    console.log(customer)
}
getLoginDetails()

let form = document.querySelector("#customerLogin");
const warning = document.querySelector(".warning-text")
// console.log(warning)
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const email = document.querySelector(".userEmail").value;
    const password = document.querySelector(".userPassword").value;

    const user = localStorage.getItem("user");
    const technician = JSON.parse(user)
    console.log(technician)
    if(email !== "" && password !== ""){
        if(email === technician.email && password === technician.password){
        location.href = "/technician/technician.html"
        //  console.log("we have logged in")
        }else{
            warning.innerText = "You have entered  incorrect email or password"
        }
    }else{
        warning.innerText = "Please fill the details to login"
    }
    
    

    
})
console.log(form)