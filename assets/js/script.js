import Aguila from "./clases/Aguila.js"
import Leon from "./clases/Leon.js"
import Serpiente from "./clases/Serpiente.js"
import Lobo from "./clases/Lobo.js"
import Oso from "./clases/Oso.js"
import getData from "./getData.js"

(async () => {

    const nuevosAnimales = []
    const listadoAnimalesJson = await getData()

    const animalImpreso = document.querySelector("#animales")
    const nombre = document.querySelector('#animal')
    const edad = document.querySelector('#edad')
    const comentarios = document.querySelector('#comentarios')
    const previewAnimal = document.querySelector('#preview')

    nombre.addEventListener("change", (event) => {
        const animalJson = listadoAnimalesJson.animales.find((animal) => animal.name === nombre.value)
        previewAnimal.style.backgroundImage = `url(assets/imgs/${animalJson.imagen})`
        console.log(previewAnimal)
    })

    const cardsAnimal = (listado) => {
        animalImpreso.innerHTML = ""
        listado.map((animal) => {
            animalImpreso.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="assets/imgs/${animal._img}">
                <div class="card-body">
                    <h5>${animal._nombre}</h5>
                    <hr>
                    <p class="card-text">Edad: ${animal._edad}</p>
                    <p class="card-text">${animal._comentarios}</p>
                    <hr>
                    <audio controls width="50%">
                        <source src="assets/sounds/${animal._sonido}" type="audio/mpeg">
                    </audio>
                </div>
            </div>
            `
        });
    }

    document.querySelector('#btnRegistrar').addEventListener("click", () => {
        let nuevoAnimal;
        const animalJson = listadoAnimalesJson.animales.find((animal) => animal.name === nombre.value)
        // console.log(animalJson)
        if (nombre.value === "Leon") {
            nuevoAnimal = new Leon(nombre.value, edad.value, animalJson.imagen, comentarios.value, animalJson.sonido)
            // agregarAnimal.innerHTML = `<img src="assets/imgs/${animalJson.imagen}">`
        } else if (nombre.value === "Lobo") {
            nuevoAnimal = new Lobo(nombre.value, edad.value, animalJson.imagen, comentarios.value, animalJson.sonido)
        } else if (nombre.value === "Oso") {
            nuevoAnimal = new Oso(nombre.value, edad.value, animalJson.imagen, comentarios.value, animalJson.sonido)
        } else if (nombre.value === "Serpiente") {
            nuevoAnimal = new Serpiente(nombre.value, edad.value, animalJson.imagen, comentarios.value, animalJson.sonido)
        } else {
            nuevoAnimal = new Aguila(nombre.value, edad.value, animalJson.imagen, comentarios.value, animalJson.sonido)
        }

        if (nombre.value && edad.value && comentarios.value) {
            nuevosAnimales.push(nuevoAnimal)
            cardsAnimal(nuevosAnimales)
            nombre.selectedIndex = 0
            edad.selectedIndex = 0
            comentarios.value = ""
        } else {
            alert("Faltan datos por llenar")
        }
    })
})()