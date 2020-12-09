const header = document.querySelector('header');
const section = document.querySelector('section');

const request = new XMLHttpRequest();
request.open('GET', 'ObjetNotation.json');
request.responseType = 'json';
request.send();

request.onload = function() {
    const empresas = request.response;
    completarHeader(empresas);
    completarSection(empresas);
}


function completarHeader(ObjetNotation){
    const myH1 = document.createElement('h1');
    myH1.textContent = ObjetNotation['proyecto'];
    header.appendChild(myH1);

    const myParagraph = document.createElement('h3');
    myParagraph.textContent = ObjetNotation['adj'];
    header.appendChild(myParagraph);

    const myName = document.createElement('p');
    myName.textContent = ObjetNotation['nombre'];
    header.appendChild(myName);

    const Date = document.createElement('p');
    Date.textContent = ObjetNotation['nacimiento'];
    header.appendChild(Date);

    const myDesc = document.createElement('p');
    myDesc.textContent = ObjetNotation['descripcion'];
    header.appendChild(myDesc);
}


function completarSection(ObjetNotation) {
    const empresas = ObjetNotation['empresas'];

    for (var i = 0; i < empresas.length; i++) {
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myDescription = document.createElement('p');
        const myLista = document.createElement('ul');
        const myLista2 = document.createElement('ul');

        const myItem = document.createElement('li');
        myItem.textContent = empresas[i].hitos;
        myLista.appendChild(myItem);

        myH2.textContent = empresas[i].nombre;
        myPara1.textContent = 'Fundación: ' + empresas[i].fundacion;
        myDescription.textContent = 'Descripción: ' + empresas[i].descripcion;

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myDescription);
        myArticle.appendChild(myLista);

        if (empresas[i].nombre == "Space X"){
            myLista2.textContent = 'Vehiculos: ';
            for(var j = 0; j < empresas[2].vehiculos.length; j++){
                const vehiculos = document.createElement('li');
                vehiculos.textContent = empresas[2].vehiculos[j].vehiculo;
                myLista2.appendChild(vehiculos);
            }       

            if (empresas[i].nombre == "Tesla Inc."){
                myLista2.textContent = 'Vehiculos: ';
                for(var j = 0; j < empresas[3].productos.length; j++){
                    const productos = document.createElement('li');
                    productos.textContent = empresas[3].productos[j].auto;
                    myLista2.appendChild(productos);
                }    }
           
            myArticle.appendChild(myLista2);
        }

        section.appendChild(myArticle);
    }
}