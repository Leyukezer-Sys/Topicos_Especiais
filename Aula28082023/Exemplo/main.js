var nome ="Fulano";
var idade = 15;
let apresentacao = "Olá " + nome;

if(idade >= 30){
    console.log("idade MAIOR que 30")
}else{
    console.log("idade menor que 30")
}

for(i = 0; i < 10; i++){
    console.log(i+1)
}

function IniciarSistema() {
    console.log("Iniciando o Sistema!")
    console.log(apresentacao)
}

IniciarSistema();