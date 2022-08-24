import Animales from "./Animales.js"

// Clase hija
class Oso extends Animales{
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    grunir() {
        console.log(this.sonido)
    }
}

export default Oso
