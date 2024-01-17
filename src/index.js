var nomeHeroi = "Boromir"
var nivelHeroi = 8.000
var nomeNivel = "" // Variável que armazena o nível

while (nivelHeroi > 0) {
    if (nivelHeroi === 1.000) {
        nomeNivel = "Ferro"
        break
    } else if (nivelHeroi >= 1.001 && nivelHeroi <= 2.000) {
        nomeNivel = "Bronze"
        break
    } else if (nivelHeroi >= 2.001 && nivelHeroi <= 5.000) {
        nomeNivel = "Prata"
        break
    } else if (nivelHeroi >= 5.001 && nivelHeroi <= 7.000) {
        nomeNivel = "Ouro"
        break
    } else if (nivelHeroi >= 7.001 && nivelHeroi <= 8.000) {
        nomeNivel = "Platina"
        break
    } else if (nivelHeroi >= 8.001 && nivelHeroi <= 9.000) {
        nomeNivel = "Ascendente"
        break
    } else if (nivelHeroi >= 9.001 && nivelHeroi <= 10.000) {
        nomeNivel = "Imortal"
        break
    } else if (nivelHeroi > 10.001) {
        nomeNivel = "Radiante"
        break
    } else {
        nomeNivel = "Indefinido"
        break
    }
}

console.log("O Herói de nome " + nomeHeroi + " está no nível " + nomeNivel)
