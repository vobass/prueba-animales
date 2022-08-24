import Animales from "./Animales.js"

// Clase hija
class Aguila extends Animales{
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    chillar() {
        console.log(this.sonido)
    }
}

export default Aguila
