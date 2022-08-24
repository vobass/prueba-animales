import Animales from "./Animales.js"

// Clase hija
class Serpiente extends Animales{
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    sisear() {
        console.log(this.sonido)
    }
}

export default Serpiente
