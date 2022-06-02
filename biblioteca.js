function Libros(titulo, autor, paginas, isbn, genero, fecha, leido, sinopsis){
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.isbn = isbn;
        this.genero = genero;
        this.fecha = fecha;
        this.leido = leido;
        this.sinopsis = sinopsis;
        libros.push(this);
}

let libros = [];

let libro1 = new Libros('Zona de clivaje', 'Liliana Heker', 150, 12, 'Novela', 2011, true, 'b');
let libro2 = new Libros('Devenir animal', 'David Abram', 350, 11, ['filosofia','ecologia'], 2021, true, 'a');

module.exports = libros;


