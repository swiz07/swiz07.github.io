const submit=document.getElementById("submit");
const onMouseover=(element)=>{
    element.style.border="1px solid black";
  }
  
  const onMouseout=(element)=>{
    element.style.border="none";
  }


  function signUpMessage() {
    const email = document.getElementById("email");
    if (email.value !== "") {
        alert("Thanks for signing in!");
    } else {
        alert("Please enter an email.");
    }
}