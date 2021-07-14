const pedido=[]
const marca = "Hamburguesas McTEO"

// FUNCION


class prodPromo{
    constructor (name, marca){
        this.name = name
        this.marca = marca
    }
}

const Lista = []

function nextPromo (){
    const name = document.getElementById("name").value
    const marca = document.getElementById("marca").value

    const rtadoPromo = new prodPromo (name,marca)
    Lista.push(rtadoPromo)
    console.log(Lista)

}

const btnGuardar = document.getElementById("guardar")
btnGuardar.addEventListener("click", nextPromo)



function mostrarPromo() {

    const mostrar = document.getElementById("mostrar")
    let contenedor = document.createElement("div")

Lista.forEach(element =>{
    
    contenedor.innerHTML=
   `<div>
        <p>${element.name}</p>
        <p>${element.marca}</p>
    </div>`;
    
})

document.body.appendChild(contenedor)
}

const btnMostrar = document.getElementById("mostrar2")
btnMostrar.addEventListener("click", mostrarPromo)

//Saludo//

let nombre = prompt("Cuál es tu nombre?")

let saludo ="Bienvenid@ " + nombre + " a la terminal de pedidos de " + marca 
alert(saludo)

let opcion =parseInt (prompt( nombre + " elegi el tipo de pan: 1. Blanco 2. Salvado  3.Semillas 4. Centeno"))

switch(opcion){
case 1:
    pedido.push([50,"Blanco"])
    break;
case 2: 
pedido.push([60,"Salvado"])
    break;
case 3:  
pedido.push([85,"Semillas"])  
    break;
case 4:
    pedido.push([100,"Centeno"])
    break;
}

alert("Tu opcion seleccionada fue " + pedido[0][1])

// ------------------------------------------------------
opcion =parseInt (prompt( nombre + " elegi el tipo de hamburguesa: 1. Simple 2.  Doble  3. Triple"))

switch(opcion){
case 1:
    pedido.push([450,", Simple"])
    break;
case 2: 
pedido.push([500,", Doble"])
    break;
case 3:   
pedido.push([480,", Triple"]) 
    break;
    
}

alert("Tu opcion seleccionada fue " + pedido[1][1])
// --------------------------------------------------------------

opcion =parseInt (prompt( nombre + " elegi el aderezo: 1. Ketchup  2. Mayonesa  3. Mostaza 4. Mayonesa, ketchup y mostaza"))

switch(opcion){
case 1:
pedido.push([20,", con Ketchup"])
    break;
case 2: 
pedido.push([20,", con Mayonesa"])
    break;
case 3:    
pedido.push([20,", con Mostaza"])
    break;
case 4:
    pedido.push([40,", con Mayonesa, ketchup y mostaza"])
    break;
}

alert("Tu opcion seleccionada fue " + pedido[2][1])
// ----------------------------------------------------------------
opcion =parseInt (prompt( nombre + " Elegi la bebida: 1. Agua  2. Coca Cola  3. Sprite 4. Fanta "))

switch(opcion){
case 1:
    pedido.push([70," y una botella de Agua"])
  
    break;
case 2: 
pedido.push([100," y una botella de Coca Cola"])
   
    break;
case 3:    
pedido.push([100," y una botella de Sprite"])
  
    break;
case 4:
    pedido.push([100," y una botella de Fanta"])
 break;
}

alert("Tu opcion seleccionada fue " + pedido[3][1])

// let precioTotal = pedido [0,0] + pedido [1,0] + pedido [2,0] + pedido [3,0]
var precioPedido=0
var stringPedido=""
for(i=0;i<=3;i++){
    precioPedido=precioPedido+pedido[i][0] 
    stringPedido=stringPedido+pedido[i][1]
}

print( nombre + " su pedido es una hamburguesa con pan " + stringPedido + ". El precio es: $ " + precioPedido)  



