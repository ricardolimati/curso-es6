"use strict";

var usuario = {
  nome: 'Ricardo',
  idade: 43,
  endereco: {
    cidade: 'Presidente Prudente',
    estado: 'SP'
  }
}; // const {nome, idade, endereco:{cidade}} = usuario;
// console.log(nome);
// console.log(idade);
// console.log(cidade);

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

;
mostraNome(usuario);
