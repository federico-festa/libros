let libros = require('./biblioteca');

const objetivoDeLectura = 30;

function datos(arr){
    console.log('En la biblioteca tenemos:');
    arr.forEach(function(libro){
        return console.log(libro.titulo + ', escrito por ' + libro.autor + ', fue publicado en el año ' + libro.fecha + '. Es un libro de ' + libro.paginas + ' paginas y se trata de ' + libro.sinopsis);
    })
}

function faltaLeer(arr){
    let leidos = 0;
    arr.forEach(function(libro){
        if(libro.leido===true){
            return leidos++;
        }
    })

    return 'En lo que va del año hemos leido ' + leidos + ' libros. Para alcanzar el objetivo falta leer ' + (objetivoDeLectura-leidos) + ' libros.';
}


console.log(datos(libros));
console.log(faltaLeer(libros));
