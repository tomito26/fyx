function User(fullname,email,password){
    this.fullname = fullname;
    this.email = email;
    this.password=password;
}

let users = []


const form = document.querySelector(".createAccountForm");

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const userPassword = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirmpassword").value;
    
    console.log(name)
    if(name !== "",email !== "",userPassword !== "",confirmPassword !== ""){
        let user = new User(name,email,userPassword);
        users.push(user)
        window.location.href="../../customer/customer.html"
    }
    console.log(users)
    
})


function initMap(){
    const options = {
        center:{lat:-1.286389,lng:36.817223},
        zoom:14
    };

    map = new  google.maps.Map(document.querySelector(".map"),options);
}
// console.log("tom")

