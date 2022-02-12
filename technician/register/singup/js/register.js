function User(fullname,email,password){
    this.fullname = fullname;
    this.email = email;
    this.password=password;
}

let users = []



const form = document.querySelector(".createAccountForm");
const warning =  document.querySelector(".warning-text");
console.log(warning)

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const userPassword = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirmpassword").value;
    
    console.log(name)
    if(name !== "" && email !== "" && userPassword !== "" && confirmPassword !== ""){
        if (userPassword === confirmPassword){
            let user = new User(name,email,userPassword);
            users.push(user)
            localStorage.setItem("user",JSON.stringify(user))
            console.log(localStorage)
            location.href="/technician/register/signin/login.html"
        }else{
            warning.innerText = "The password entered doesn't match confirm password"
        }
  
    }else{
        warning.innerText = "Please fill the details"
    }
    console.log(users)
    
})

// const setItem = ()