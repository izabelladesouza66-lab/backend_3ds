//funções podem ou não receber parÂmetros
//são blocos reaprovetaveis

function diz0la(){
    console.log("ola!")

} 
function diz0lapessoa(nome) {
    if(typeof nome!== "string") {
        console.error("por favor, digite um valor de texto!") 
    } else {
        console.log(nome+", diz ola!")
    }
} 

diz0la()
diz0lapessoa("pedro") 
diz0lapessoa("bella") 
diz0lapessoa(12321) 