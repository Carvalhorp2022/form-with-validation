const inputResult = document.querySelectorAll(".input-text");
const botaoEnviar = document.querySelector(".btn-enviar")

botaoEnviar.addEventListener("click", (event) => {
    event.preventDefault()
    inputResult.forEach(inputText => {
        if(inputText.value ===""){
            inputText.classList.add("semPreechimento")
            inputText.nextElementSibling.classList.remove("alerta")
                      
        }else {
            inputText.classList.add("preenchido")
            inputText.classList.remove("semPreechimento")
            inputText.nextElementSibling.classList.add("alerta")
        
        }
    })
})

  inputResult.forEach(inputText => {
       
      inputText.addEventListener("change", () => {
        
         if (inputText.value !== "") {

             inputText.classList.add("preenchido")
             inputText.nextElementSibling.classList.add("alerta")            

         } else {            
             inputText.classList.remove("preenchido")
             inputText.nextElementSibling.classList.remove("alerta")           
         }
     });
  });