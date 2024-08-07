const arrayOfUsers=[]
function GetuserData(){
  const userName=document.getElementById("name").value
  const userEmail=document.getElementById("email").value
  const userPh=document.getElementById("ph").value
  const userPassword=document.getElementById("password").value
  const user={
    mame:userName,
    email:userEmail,
    number:userPh,
    password:userPassword
   
}
  arrayOfUsers.push(user)
  console.log(arrayOfUsers)
}

