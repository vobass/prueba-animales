// Se crea la clase padre
class Animales {
    constructor(nombre, edad, img, comentarios, sonido) {
        this._nombre = nombre
        this._edad = edad
        this._img = img
        this._comentarios = comentarios
        this._sonido = sonido
    }

    getNombre() {
        return this._nombre
    }
    getEdad() {
        return this._edad
    }
    getImg() {
        return this._img
    }
    getComentarios() {
        return this._comentarios
    }
    setComentarios(comentarios) {
        this._comentarios = comentarios
    }
    getSonido() {
        return this._sonido
    }
}
export default Animales