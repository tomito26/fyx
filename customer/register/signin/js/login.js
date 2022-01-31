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
    const customer = JSON.parse(user)
    console.log(customer)
    if(email === customer.email && password === customer.password){
        location.href = "/customer/customer.html"
    }
    
    

    
})
console.log(form)