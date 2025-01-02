let mail       = document.getElementById('email')
let password   = document.getElementById('password')

let login = ()=>{
    mail        = mail.value  
    password    = password.value
   if(mail=='akhi.web@gmail.com' && password =="12345"){
    console.log("login done");
       alert("login done")

   }
   else{
    console.log("sorry");
    alert("sorry !")
    

   }
}
