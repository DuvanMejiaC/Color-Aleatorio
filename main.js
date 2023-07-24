const boton = document.querySelector("button");
const color = document.getElementById("color");

function colorAleatorio(){
    let digito = "0123456789ABCDEF";
    let colorHex = "#";

    for(let i = 0; i < 6; i++){
        let indiceAleatorio = Math.floor(Math.random() * 16);
        colorHex += digito[indiceAleatorio];
}
    return colorHex;
}

boton.addEventListener("click", function(){
    let colorAle = colorAleatorio();
    color.textContent = colorAle;
    document.body.style.backgroundColor = colorAle;
});

