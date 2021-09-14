let namenode=document.getElementById("fname");
let errornode1=document.getElementById("error1");

let mailnode=document.getElementById("mail");
let errornode3=document.getElementById("error3");



function validate1(){
  errornode1.innerHTML="";
  let firstname=namenode.value;
  if(firstname=="")
  {
      errornode1.innerHTML="This field is required";
      namenode.style.border="2px solid red";
      return false;
  }
  else if(firstname.length<2)
  {
      errornode1.innerHTML="first name should contain atleast 2 chars";
      namenode.style.border="2px solid red";
      return false;
  }
  else
  {
    namenode.style.border="2px solid green";
    return true;
  }
}


  function validate3(){
    errornode3.innerHTML="";
    let email=mailnode.value;
    let ss=email.substring(email.indexOf("@")+1);
    if(email=="")
    {
        errornode3.innerHTML="This field is required";
        mailnode.style.border="2px solid red";
        return false;
    }
    else if(!email.includes("@") || ss=="")
    {
        errornode3.innerHTML="Please Enter valid email";
        mailnode.style.border="2px solid red";
        return false;
    }
    else{
        mailnode.style.border="2px solid green";
        return true;
    }
  }
  
 

  function validateform(){

    let state1=validate1();
    let state3=validate3();
    if(state1 && state3){
    return true;
    }
    else{
    return false;
    }
  }