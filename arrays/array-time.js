//um array é um grupo indexaode valores
// pode ser homogéos / heterogêneos
// seus vão de ''0'' . . .''infinito
//possuem funções nativa (prontas)
//podem ser internados e checados

const time= ['peter','pan', true, ,56]
    // indices 0       1     2     3
time[55] // undefined

for (const jogador of time) {
    console.log("jogador: " +jogador)
}
