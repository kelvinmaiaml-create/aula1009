var idade 
var preco
var acesso

if (idade<12){
    preco = "R$ 15,00"
    acesso = "negado"
}else if(idade>=12 && idade <=15){
    preco = "R$ 30,00"
    acesso = "negado"
}else if(idade>16 && idade <60){
    preco = "R$ 30,00"
    acesso = "Permitido"
}else{
    preco = "R$ 15,00"
    acesso = "permitido"
}
console.log("O ingresso custa: ",preco," e seu acesso está:",acesso)