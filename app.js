const submit=document.getElementById("submit");
const onMouseover=(element)=>{
    element.style.border="1px solid black";
  }
  
  const onMouseout=(element)=>{
    element.style.border="none";
  }


  function signUpMessage() {
    const email = document.getElementById("email").value
    
    if (email !== "" && email.includes("@")) {
        alert("Thanks for signing up!");
    } else {
        alert("Please enter a valid email.");
    }
}

function toggleDarkMode() {
  // Toggle the "dark-mode" class on the body
  document.body.classList.toggle("dark-mode");
  const elements = document.querySelectorAll(".main-news");
  for (const element of elements) {
    element.classList.toggle("myStyle");
  }
}

/*#logo>a color: #cadbe9;*/
/*#nav-ul>li>a #fff*/


