var nomeHeroi = "Boromir"
var nivelHeroi = 8.000

if (nivelHeroi === 1.000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível Ferro")
} else if (nivelHeroi >= 1.001 && nivelHeroi <= 2.000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível Bronze")
} else if (nivelHeroi >= 2.001 && nivelHeroi <= 5.000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível Prata")
} else if (nivelHeroi >= 5.001 && nivelHeroi <= 7.000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível Ouro")
} else if (nivelHeroi >= 7.001 && nivelHeroi <= 8.000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível Platina")
} else if (nivelHeroi >= 8.001 && nivelHeroi <= 9.000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível Ascendente")
} else if (nivelHeroi >= 9.001 && nivelHeroi <= 10.000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível Imortal")
} else if (nivelHeroi > 10.001) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível Radiante")
} else {
    console.log("O Herói de nome " + nomeHeroi + " está no nível indefinido")
}