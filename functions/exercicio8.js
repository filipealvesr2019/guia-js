const numeros = new Set([1, 2, 2, 3, 4, 4]);
console.log(numeros);

numeros.add(5);
numeros.add(5);

console.log(numeros.has(3));
console.log(numeros.has(10));