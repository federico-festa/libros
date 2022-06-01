let libros = require('./biblioteca');

const objetivoDeLectura = 30;
const leidos = 0;
function faltaLeer(arr){
        for(let i=0;i<=arr.length;i++){
        if(arr[i].leido == true){
            leidos = leidos + 1;
        }
    }
    return 'En lo que va del año hemos leido ' + leidos + ' libros. Para alcanzar el objetivo falta leer ' + (objetivoDeLectura-leidos) + ' libros.';
}

function datos(arr){
    console.log('En la biblioteca tenemos:');
    for(let i=0;i<=arr.length;i++){
       return console.log(arr[i].titulo + ', escrito por ' + arr[i].autor + ', fue publicado en el año ' + arr[i].fecha + '. Es un libro de ' + arr[i].paginas + ' paginas y se trata de ' + arr[i].sinopsis);
    }
}

console.log(datos(libros));
console.log(faltaLeer(libros));
