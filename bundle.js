"use strict";

var arr = [1, 3, 4, 5, 6];
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);

var teste = function teste() {
  return [1, 2, 3, 4];
};

console.log(teste());

var teste2 = function teste2() {
  return {
    nome: 'Ricardo'
  };
};

console.log(teste2().nome);
