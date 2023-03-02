const distancia = prompt('Ingrese una distancia a recorrer',' ');

distancia = parseInt(distancia)

if(0<distancia && distancia<1000){
    document.write('debe recorrer en pie');
}

if(distancia >= 1000 && distancia < 10000 ){
    document.write('debe recorrer en bicicleta');
}

if(distancia >= 10000 && distancia < 30000){
    document.write('debe recorrer en colectivo');
}

if(distancia < 100000 && distancia >= 30000){
    document.write('debe recorrer en auto');
}

if(distancia >= 100000 ){
    document.write('debe recorrer en avion');
}


