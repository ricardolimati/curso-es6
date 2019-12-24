const usuario = {
    nome: 'Ricardo',
    idade: 43,
    endereco: {
        cidade: 'Presidente Prudente',
        estado: 'SP',
    },

};

// const {nome, idade, endereco:{cidade}} = usuario;

// console.log(nome);
// console.log(idade);
// console.log(cidade);

function mostraNome({nome, idade}){
    console.log(nome, idade);
};

mostraNome(usuario);
