let numeros =[];

function numerosAleatorios() {
    let numAleatorio = Math.floor(Math.random() * (100) + 1);
    return numAleatorio;
}

for (let index = 0; index < 10; index++) {
    numeros.push(numerosAleatorios())
}
console.log(numeros);
if (numeros) {
    alert('Valida la consola')
}else{
    alert('Cargando')
}