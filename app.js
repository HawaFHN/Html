let mail       = document.getElementById('email')
let password   = document.getElementById('password')
let food       =document.getElementById('food')
let login_sec      =document.getElementById('login_sec')

let login = ()=>{
    mail        = mail.value  
    password    = password.value
   if(mail=='hawanur.web@gmail.com' && password =="12345"){
    console.log("login done");
    login_sec.classList.add('hidden')
       food.classList.remove('hidden')


   }
   else{
    console.log("sorry");
    alert("sorry !")
    

   }
}
