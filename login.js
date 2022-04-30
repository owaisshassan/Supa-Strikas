var userDetail=JSON.parse(localStorage.getItem("signup")) || null
document.querySelector("#form").addEventListener("submit",signinFun)

// After Submiting 
function signinFun(){
event.preventDefault()
var email=document.querySelector("#email").value
var password=document.querySelector("#password").value 
   
 // Check User Detail
userDetail.forEach(function(elem){
event.preventDefault()
if (userDetail==null){
alert("Please Create Account")
window.location.href="signup.html"
        }
else if(elem.email==email && elem.password==password){
alert("Login Successful")
 window.location.href="navbar.html"
        }
else{
alert ("Invalid Email or Password")
        }
})
}
