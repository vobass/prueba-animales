const url = "https://vobass.github.io/prueba-animales/animales.json"
const getData = async () => {
    const res = await fetch(url)
    const data = await res.json()
    return data
}

export default getData
