function validfname(){
    let first_name=document.getElementById("firstname").value
   
    if (first_name=="" ){
    displaymsg("Firstname is required","fname","red")
    return false;
}
else if(first_name.length<3 ){
    displaymsg("Firstname should be greater than 2 characters ","fname","red")
    return false;
}
else if(!first_name.match(/^([a-zA-Z])+$/)){
 displaymsg("should not be in Numbers","fname","red")
 return false;
}
else {
    displaymsg("first name is valid","fname","green")
  return true;
}
}

//
function validlname(){
    let last_name=document.getElementById("lastname").value
if (last_name==""){
    displaymsg("Lastname is required","lname","red")
    return false;
}
else if(last_name.length<3  ){
    displaymsg("last name should be greater than 2 characters or should not be in Numbers","lname","red")
    return false;
}
else {
displaymsg("last name is  Valid","lname","green")
  return true;
}
}

// gmail
function validemailmsg(){
    let emailmsg=document.getElementById("email").value
if (emailmsg==""){
 displaymsg("email is required","emailmsg","red")
    return false;
}
else if(emailmsg.length<3){
    displaymsg("email should be greater than 2 characters","emailmsg","red")
    return false;
}
// (email==="" || !emailmsg.includes('@'))
else if(!emailmsg.match(/^([a-z0-9])[a-z0-9\_\.\-]+\@+([a-z])+\.+([a-z])+$/)){
    displaymsg("Incorrect email format. Please include '@' symbol.","emailmsg","red")
  return false;
}
else {
    displaymsg("email is complete","emailmsg","green")

  return true;
}
}


//password
function validpass(){
    let pwd_msg=document.getElementById("password").value
if (pwd_msg==""){
    displaymsg("Password is required","pwdmsg","red")
    return false;
}
// || !pwdmsg.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{3,}$/)
else if(!pwd_msg.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#?%&*]).{8,50}$/) ){
    displaymsg("Password should be greater than 2 characters","pwdmsg","red")
    return false;
}


else {
displaymsg("Password is  Valid","pwdmsg","green")
  return true;
}
}



function displaymsg(msg,id,color){
    document.getElementById(id).innerHTML=msg;
    document.getElementById(id).style.color=color;
}


function validform(){

    if(validfname()& validlname() &validemailmsg()){

        return true;
    }
    else{
        return false;
    }
}










