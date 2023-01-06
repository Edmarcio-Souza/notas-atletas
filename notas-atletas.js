let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];

for (let i = 0; i < atletas.length; i++) {
    // O código que vai aqui será executado
    // uma vez para cada item da matriz
    let notasObtidas = atletas[i].notas.sort(function (a, b){
      return a - b;     
    });
    let notasValidas = notasObtidas.slice(1,4);
    let soma = 0
    notasValidas.forEach(function(nota){
    soma = soma + nota
  });

  let media = soma / notasValidas.length

    console.log(`Atleta: ${atletas[i].nome}
Notas: ${notasObtidas}
Média: ${media}
`)

}