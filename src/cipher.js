const cipher = {
    encode: function encode(offset, texto) {
        if (typeof offset !== "number" || typeof texto !== "string") throw new TypeError();

        let cripTexto = "";

        for (let i = 0; i < texto.length; i++) {
            let newOffset = (offset - (parseInt (offset / 26)) *26);

            if (texto.charCodeAt(i) >= 65 && texto.charCodeAt(i) <= 90) {
                const charCode = ((((texto.charCodeAt(i) - 65) + newOffset) % 26) + 65);
                 cripTexto = cripTexto + String.fromCharCode(charCode);
            }
            else {
                alert(" Escreva somente com letras maiusculas");
                break
            }
 
        }
        return cripTexto;
    },
    
    decode:function(offset,texto){
        
    if (typeof offset !== "number" || typeof texto !== "string") throw new TypeError();

    let descripetar = "";

    for (let i = 0; i < texto.length; i++) {
        let newOffset = (offset - (parseInt (offset / 26)) *26);

        if (texto.charCodeAt(i) >= 65 && texto.charCodeAt(i) <= 90) {
            const charCode = ((((texto.charCodeAt(i) - 65) - newOffset) % 26) + 65);
            descripetar = descripetar + String.fromCharCode(charCode);
        }
        else {
            alert(" Escreva somente com letras maiusculas");
            break
        }

    }
    return descripetar;
    }

};

export default cipher;







