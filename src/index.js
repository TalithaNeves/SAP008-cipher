import cipher from './cipher.js';  //interação manipulação do Dom


    const cifrarBtn = document.getElementById("textoUser");
    cifrarBtn.addEventListener('click',cifra);



    function cifra() {
        const textoUser = document.getElementById("textoUser");
        const shift = document.getElementById("tentacles");  
        let cripTexto = document.getElementById("cripTexto");

        if (shift == "" ||  textoUser == "" ) {
            alert ( "Por favor digite com letras maiusculas e  escolha posiçao" );
        }
         

        else {
            cripTexto.innerHTML = cipher.encode(parseInt(shift), textoUser);

         }

    }


    
    
    

    
   

    
