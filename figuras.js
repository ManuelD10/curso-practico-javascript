//Código del cuadrado
console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden:" + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}

// console.log("El perimetro del cuadrado es:" + perimetroCuadrado + "cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;

function areaCuadrado(lado) {
    return lado * lado;
}


// console.log("El area del cuadrado es:" + areaCuadrado + "cm^2");
console.groupEnd();

//Código del Triangulo 

console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log("Los lados del triangulo miden:" +
//     ladoTriangulo1 + "cm, " +
//     ladoTriangulo2 + "cm, " +
//     baseTriangulo + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("la altura del triángulo es de:" + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del triángulo es:" + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}


console.groupEnd();

//Código del Círculo

console.group("Círculo");

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}


// const radioCirculo = 4;
// console.log("El radio del circulo es:" + radioCirculo + "cm")

// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulo es:" + diametroCirculo + "cm")

const PI = Math.PI;
console.log("PI es:" + PI)

// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perimetro del circulo es:" + perimetroCirculo + "cm")

// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El área del circulo es:" + areaCirculo + "cm^2")

console.groupEnd();



// Aquí interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}