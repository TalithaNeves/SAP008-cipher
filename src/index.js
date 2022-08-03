import cipher from './cipher.js';  


    const cifrarBtn = document.getElementById("cifrarBtn");
    cifrarBtn.addEventListener('click',cifra);



    function cifra() {
        const textoUser = document.getElementById("textoUser");
        const shift = document.getElementById("tentacles");  
        let cripTexto = document.getElementById("cripTexto");

        
        if (shift.value == "" ||  textoUser.value == "" ) {
            alert ( "Por favor digite com letras maiusculas e  escolha posiçao" );
        }
         

        else {
            cripTexto.innerHTML = cipher.encode(parseInt(shift.value), textoUser.value);

         }

    }


    const decifrarBtn = document.getElementById("decifrarBtn");
    decifrarBtn.addEventListener('click',decodifica);



    function decodifica() {
        const textoUser = document.getElementById("cripTexto");
        const shift = document.getElementById("tentacles");  
        let cripTexto = document.getElementById("cripTexto");

      
        if (shift.value == "" ||  textoUser.value == "" ) {
            alert ( "Por favor digite com letras maiusculas e  escolha posiçao" );
        }
         

        else {
            cripTexto.innerHTML = cipher.decode(parseInt(shift.value), textoUser.value);

         }

    }


    
    
    

    
   

    
