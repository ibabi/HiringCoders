var lista = [1, 2, 5];
var listaIncluir = [3, 4];

// utilizando lacos de repeticao
for (var i = 0; i < listaIncluir.length; i++) {
  for (var j = 0; j < lista.length; j++) {
    if (lista[j] >= listaIncluir[i]) {
      lista.splice(j, 0, listaIncluir[i]);
      j++;
    }
  }
}

console.log(lista);

// utilizando o spread operator
const listaResult = [1, 2, ...listaIncluir, 5];

console.log(listaResult);