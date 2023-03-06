const distancia = prompt('Ingrese una distancia a recorrer',' ');

distancia = parseInt(distancia)

const transporte = '';

if(0<distancia && distancia<1000){
    transporte ='pie';
}

if(distancia >= 1000 && distancia < 10000 ){
    transporte ='bicicleta';
}

if(distancia >= 10000 && distancia < 30000){
    transporte ='colectivo';
}

if(distancia < 100000 && distancia >= 30000){
    transporte ='auto';
}

if(distancia >= 100000 ){
    transporte ='avion';
}

document.write(`debe recorrer en ${transporte}`)


