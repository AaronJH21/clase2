class Alumno{
    constructor (nombre,edad){
        this.nombre=nombre
        this.edad=edad
    }
    static saludoPequeño = 'hola'
    
    saludoCompleto(){
        console.log('Buenas,soy ${this.nombre}')
    }

    static saludoEstatico(){
        console.log(Alumno.saludoPequeño)
    }
}
const andres = new Alumno('Andres',14)
console.log(andres)
andres.saludoCompleto()

class Mascotas{
    constructor(nombre,edad){
        this.nombre=nombre
        this.edad=edad
        this.tipo=tipo
    }
    static mascotaInfo= 'Soy una Mascota'
    
    presentacionCompleta(){
        console.log('Hola, soy ${this.nombre}')
    }
    static infoEstatico(){
        console.log(Mascotas.mascotaInfo)
    }
}
const pancha = new Mascotas('Pancha',1,'gato')
console.log(pancha)
pancha.presentacionCompleta()

class Libros{
    constructor(nombre,tipo,grado){
        this.nombre=nombre
        this.grado=grado
        this.tipo=tipo
    }
    static librosInfo='soy un libro'

    presentacionDeLibro(){
        console.log(' libro de ${this.nombre}');
    }

    static presentacionLibro(){
        console.log(Libros.librosInfo)
    }
}
const matematicas= new Libros('Matematicas',2,'ejercicios')
console.log(matematicas)
matematicas.presentacionLibro()