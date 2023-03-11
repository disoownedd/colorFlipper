const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]

// console.log (document.querySelector('#btn').textContent)
const btn = document.querySelector('#btn')

const color = document.querySelector('.color')

const getRandom03=() =>{
    let random = Math.random()
    random = random * 3
    random = parseInt(random)
    return random
}

/* Creamos el detector de ventos de clicl: */
btn.addEventListener('click', function(){
    // console.log(document.body)
    // Obtener un numero aleatorio entre 0 - 3 /* Entre 0 y 3 para poder moverse por las matrices de la constante "colors" */
    const randomNumber= 2
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})
