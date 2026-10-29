// array (separado por vírgila)
const carros = ['camaro','mustang','audi']
               //  0         1       2
console.log(carros[33]) // undefined 

for(carro of carros){ 
    console.log('carro:'+carro)
}