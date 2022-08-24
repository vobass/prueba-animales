import Animales from "./Animales.js"

// Clase hija
class Lobo extends Animales{
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    aullar() {
        console.log(this.sonido)
    }
}

export default Lobo
