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

        }
        return cripTexto;
    }

}





export default cipher;







