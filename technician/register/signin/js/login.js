function getLoginDetails(){
    let customer = sessionStorage.getItem("user")
    console.log(customer)
}
getLoginDetails()

let form = document.querySelector("#customerLogin");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const email = document.querySelector(".userEmail").value;
    const password = document.querySelector(".userPassword").value;

    const user = sessionStorage.getItem("user");
    const technician = JSON.parse(user)
    console.log(technician)
    if(email === technician.email && password === technician.password){
        location.href = "/technician/technician.html"
    }
    
    

    
})
console.log(form)