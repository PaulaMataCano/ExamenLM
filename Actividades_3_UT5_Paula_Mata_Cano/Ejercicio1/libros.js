function gestionarFicheroXML(xmlDoc) {
    let preciosArray = [];
    let contador = 0;

    for (let i = 0; i < xmlDoc.getElementsByTagName('libreria').length; i++) {

        let libreria = xmlDoc.getElementsByTagName('libreria');
        let libros = libreria[i].getElementsByTagName('libro');

        let body = document.getElementsByTagName('body')[0];
        let table = document.createElement('table');

        let tableBody = document.createElement('tbody');
        let valorCelda;


        let titulo = document.createElement('h3');
        let nombre = libreria[i].getElementsByTagName('nombre')[0].textContent;
        let textoTitulo = document.createTextNode(nombre);
        titulo.appendChild(textoTitulo);
        body.appendChild(titulo);

        for (let j = 0; j < libros.length; j++) {


            preciosArray[contador] = (libros[j].getElementsByTagName('precio')[0].childNodes[0].nodeValue);
            contador++;
        }
        preciosArray.sort(function(a, b) { return a - b });

        for (let j = 0; j < libros.length; j++) {
            let fila = document.createElement('tr');

            let propiedades = libros[j].childNodes;
            for (let k = 0; k < propiedades.length; k++) {
                if (libros[j].childNodes[k].nodeType != 3) {
                    let celdas = document.createElement('td');
                    valorCelda = libros[j].childNodes[k].textContent;

                    let texto = document.createTextNode(valorCelda);
                    celdas.appendChild(texto);
                    fila.appendChild(celdas);
                }
            }
            if (libros[j].getElementsByTagName('precio')[0].childNodes[0].nodeValue == preciosArray[0]) {
                fila.setAttribute('style', 'background-color: #F8E0F7');

            }

            tableBody.appendChild(fila);

        }
        table.appendChild(tableBody);
        body.appendChild(table);
    }


}

let xmlDoc = loadLDocA("libros.xml", "xml");