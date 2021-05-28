var contador = 0;
let intervalo;

function gestionarFicheroTXT(txtDoc) {
    let lineas = txtDoc.split('\n');
    for (let i = contador; i < lineas.length; i++) {
        let elemento = document.createElement('H1');
        let texto = document.createTextNode(lineas[i]);

        if (lineas[i].includes('Pepe:')) {
            elemento.className += 'Emisor';

        } else if (lineas[i].includes('Julio:')) {
            elemento.className += 'Receptor';
        }
        elemento.appendChild(texto);
        document.body.appendChild(elemento);

        contador++;
    }
}

function esperarDiezSeg() {
    intervalo = setInterval(loadLDocA, 10000, 'ej2.txt', 'txt');
}