let id = 0;
let pagoTotal = 0;

const itemsContainer = document.querySelector("#list-items")

function addItem(id, item) {
    const colourCard = document.createElement("section")
    colourCard.className = "card w-75"
    itemsContainer.append(colourCard)
  
    const colourCardBody = document.createElement("article")
    colourCardBody.className = "card-body"
    colourCard.append(colourCardBody)
  
    const colourCardTitle = document.createElement("h3")
    colourCardTitle.className = "card-title"
    colourCardTitle.innerText = item.articulo

  
    const colourCardText = document.createElement("p")
    colourCardText.className = "card-text"
    colourCardText.innerText = "$" + item.precio

    colourCardBody.append(colourCardTitle, colourCardText)
}

function agregarCarrito(articulo, precio) {
    if (localStorage.getItem(0) == 0) {
        id ++;
    } else {
        id = localStorage.getItem(0);
        id ++;
        localStorage.setItem(0,id);
    }
    
    const nombreArticulo = articulo;
    const precioArticulo = precio;

    var json = {"articulo" : nombreArticulo,
                 "precio"   : precioArticulo
               };

               


    pagoTotal = pagoTotal + precioArticulo;
    localStorage.setItem(100,pagoTotal)

    localStorage.setItem(id, JSON.stringify(json));
    
    console.log(json);
}

function eliminarCarrito() {
    for (let i = 0; i <= 100; i++) {
        localStorage.removeItem(i);
    }
    location.reload();
}

function mostrarCarrito() {

    for (let i = 1; i < 100; i++) {
        const element = JSON.parse(localStorage.getItem(i));
        if (element == null) {
            
        } else {
            console.log(element);
            addItem(i, element);
        }
    }

    if (localStorage.getItem(100) == null) {
        document.getElementById("pagoTotal").innerText = "Ve a la pagina de productos";
    }else{
        document.getElementById("pagoTotal").innerText = `El costo total a pagar es: ${localStorage.getItem(100)}`;
    }
    
}


mostrarCarrito();