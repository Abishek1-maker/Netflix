 let email=document.getElementById('email');
 let error=document.getElementById('error-email');
//blur event to check if value exists or not

 email.addEventListener('blur',()=>{
if (email.value===""){
 error.textContent="please enter the valid email"
}
else{
  error.textContent=""
}

 })