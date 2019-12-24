
//REST

// const usuario = {
//     nome: 'Ricardo',
//     idade: 43,
//     empresa: 'Oxigenweb'
// };

// const { nome, ...resto} = usuario;

// console.log(nome);
// console.log(resto);

//const arr = [1,2,3,4];

// const [a, b, ...c] = arr;

// console.log(a);
// console.log(b);
// console.log(c);

function soma (...params){
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 3, 4, 6));

// SPREAD

// const arr1 = [1,2,3];
// const arr2 = [4,5,6];

// const arr = [...arr1, ...arr2];

// console.log(arr);

const usuario1 = {
    nome: 'Ricardo',
    idade: '43',
    empresa: 'Oxigenweb',
}

const usuario = {...usuario1, nome: 'Gabriel'};

console.log(usuario);