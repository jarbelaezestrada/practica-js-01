function mayorDeDosNumeros (ingreso1, ingreso2) {
    if (ingreso1 > ingreso2) {
        return "El numero mayor es " + ingreso1;
    } else {
        return "El mayor es " + ingreso2;
    }
}

const resultado = mayorDeDosNumeros(540,320);
//console.log(resultado);

//let mensaje = "Hola clase de javascript";

//console.log(mensaje.indexOf);


function containsWord(mensaje, texto) {
   const resultado =  mensaje.indexOf(texto);
    console.log(resultado);
   if (resultado !== -1) {
       console.log("la palabra " + texto + " se encuentra en el mensaje");
   }else {
    console.log("La palabra " + texto + " no se encuentra en el mensaje");
   }
   //console.log(resultado);
   //console.log(texto);
}

containsWord("Hola clase de javascript", "clase");