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

    const myParagraph = document.createElement('p');
    myParagraph.textContent = ObjetNotation['adj'];
    header.appendChild(myParagraph);
}


function completarSection(ObjetNotation) {
    const empresas = ObjetNotation['empresas'];
    //console.log(empresas.length);

    for (var i = 0; i < empresas.length; i++) {
        const myArticle = document.createElement('article');//?
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        //const myPara2 = document.createElement('p');
        const myLista = document.createElement('ul');

        //console.log(empresas[i].hitos);
        /*
        for (var j = 0; j < empresas[i].hitos.length; j++) {
            const myItem = document.createElement('li');
            myItem.textContent = empresas[i].hitos[j];
            myLista.appendChild(myItem);
        }
        */
        myH2.textContent = empresas[i].nombre;
        myPara1.textContent = 'fundación: ' + empresas[i].fundacion;
        //myPara2.textContent = 'propiedad actual: ' + empresas[i].propiedadActual;

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        //myArticle.appendChild(myPara2);
        myArticle.appendChild(myLista);

        section.appendChild(myArticle);
    }
}


/*  --------------- */