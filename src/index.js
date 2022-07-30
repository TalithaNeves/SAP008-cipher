import cipher from './cipher.js';  //interação manipulação do Dom


    const cifrarButton = document.getElementById("cifrarButton");
    cifrarButton.addEventeListener('click', cifra);



    function cifra () {
        const textoUser = document.getElementById("textoUser").value;
        const shift = document.getElementById("posicao").value;  
        let cripTexto = document.getElementById("cripTexto");

        if (shift == "" ||  textoUser == "" ) {
            alert ( "Por favor digite com letras maiusculas e  escolha posiçao" );
        }
         

        else {
            cripTexto.innerHTML = cipher.encode(parseInt(shift), textoUser);

         }

    }


    
    
    

    
   

    
