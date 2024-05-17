const botoes = document.querySelectorAll(".botao");
console.log(botoes)
for (let i=0; i<botoes.length; i++ ) {
console.log(1);
botoes[1].onclick=function(){
for(let j=0; j<botoes. lenght; j++){
botoes[j].classList.remova("ativo");
}
botoes[1].classList.add("ativo");

}

}