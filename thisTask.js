function checkForm(name, email, password) {


  const isNameValid = name.length >= 3; 
  const isEmailValid = email.includes('@') && email.includes('.') && email.indexOf('.') > email.indexOf('@'); 
  const isPasswordValid = password.length >= 6; 


  if (isNameValid && isEmailValid && isPasswordValid) {
    console.log("Redirecting to another page");
  } else {
    console.log("Error: Invalid input");
  }
}