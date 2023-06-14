let numeros = [10,40,30,20,15,5]
let orden
orden = numeros.sort(function (a,b) {
    return a - b
})

alert("array de menor a mayor: " + orden)
alert("numeor menor de array es: " +Math.min.apply(null, numeros))
alert("numeor mayor de array es: " +Math.max.apply(null, numeros))