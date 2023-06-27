// carne = 400 gr por pessoa, + de 6 horas = 650
// cerveja = 1200 ml por pessoa, + de 6 horas = 2000 ml
// refrigerante/agua = 1000 ml por pessoa, + de 6 horas = 1500ml
// crianças valem por 0,5 

function calcular(){
    let adultos = document.getElementById("adultos")
    let criancas = document.getElementById("criancas")
    let duracao = document.getElementById("duracao")
    let res = document.getElementById("res")

    var a = Number(adultos.value)
    var c = Number(criancas.value)
    var d = Number(duracao.value)

    var carne = 0
    var cerveja = 0
    var bebidas = 0
    
    if (d > 6){
        carne = (a * 0.65) + (c * 0.325)
        cerveja = a * 2
        bebidas = c * 1.5

        
    } else {
        carne = (a * 0.4) + (c * 0.2)
        cerveja = a * 1.2
        bebidas = c * 1

    }


    res.innerHTML = `${carne.toFixed(2)} Kg de Carne <br>`
    res.innerHTML += `${cerveja} litros de cerveja<br>`
    res.innerHTML += `${bebidas} litros de bebidas não alcoólicas<br>`
}