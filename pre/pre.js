// Comentários

// Logs
console.log('Hello World')

// Variáveis
var a = 0
let b = 0
const c = 0

console.log('a', a)
console.log('b', b)
console.log('c', c)

// Tipos primitivos
const number = 0
const string = 'text'
const varNull = null
const varUndefined = undefined
const varSymbol = Symbol()

// Checando os tipos
console.log(typeof number)
console.log(typeof string)
console.log(typeof varNull)
console.log(typeof varUndefined)
console.log(typeof varSymbol)

// Comparando tipos primitivos
console.log(number === 0)
console.log(string === 'text')
console.log(varNull === null)
console.log(varUndefined === undefined)
console.log(varSymbol.toString() === Symbol().toString())

// Tipos não primitivos
const object = {}
const varFunction = function () {}
const date = new Date()
const array = []
const map = new Map()
const set = new Set()

// Checando os tipos
console.log(typeof object)
console.log(typeof varFunction)
console.log(typeof date)
console.log(typeof array)
console.log(typeof map)
console.log(typeof set)

// Comparando tipos não primitivos
console.log(object === {})
console.log(varFunction === function () {})
console.log(date === new Date())
console.log(array === [])
console.log(map === new Map())
console.log(set === new Set())

const newObject = object
console.log(object === newObject)

console.log(object)
newObject.name = 'Zagatti'
console.log(object)

console.log(1 + 2)
console.log(3 + 3)

// Escopo
{
  var a = 1
  let b = 1
  const c = 1
}

// Operadores de comparação
console.log(a == b)
console.log(a === b)
console.log(a != b)
console.log(a !== b)
console.log(a > b)
console.log(a < b)
console.log(2 >= 2)
console.log(2 <= 2)

// Operadores matemáticos
console.log(2 + 2)
console.log(2 - 2)
console.log(2 / 2)
console.log(2 * 2)
console.log(2 % 2)

// Operadores lógicos
console.log(true && 'is true')
console.log(false || 'is false')
console.log(undefined || 'is undefined')
console.log(null || 'is null')
console.log(0 || 'is 0')
console.log('' || 'is empty string')
console.log(0 ?? 'is zero')
console.log('' ?? 'is empty string')
console.log(undefined ?? 'is undefined')

// If-else e switch
const x = 1
const y = 0

if (x > 0) {
  console.log('x is big than 0')
} else if (y === 0) {
  console.log('y is equal to 0')
} else {
  console.log('finish branch')
}

switch (x) {
  case 1:
    console.log('x is one')
    break
  case 0:
    console.log('x is equal to 0')
    break
  default:
    console.log('finish branch')
    break
}

// Loops
for (let index = 0; index <= 3; index++) {
  console.log(index)
}
console.log('########')
for (let index = 3; index >= 0; index--) {
  console.log(index)
}
console.log('########')
let index = 0
while (index <= 3) {
  console.log(index)
  index++
}
console.log('########')
index = 0
do {
  console.log(index)
  index++
} while (index <= 3)
console.log('########')
index = 1
while (index < 0) {
  console.log(index)
  index++
}
console.log('########')
index = 1
do {
  console.log(index)
  index++
} while (index < 0)

// Criando uma função de soma
function sum(firstNumber, secondNumber) {
  return firstNumber + secondNumber
}
console.log(sum(1, 2))
console.log(sum(3, 3))

// Função para contar até determinado valor
const countTo = (max) => {
  const array = []
  for (let index = 0; index <= max; index++) {
    array.push(index)
  }
  return array
}
console.log(countTo(10))

// Aplicando currying em uma função
function sumCurryingFunction(firstNumber) {
  return function (secondNumber) {
    return function (thirdNumber) {
      return firstNumber + secondNumber + thirdNumber
    }
  }
}

// Currying com arrow function
const sumCurrying = (firstNumber) => (secondNumber) => (thirdNumber) =>
  firstNumber + secondNumber + thirdNumber

console.log(sumCurrying(1)(1)(1))

// Usando currying com aplicação parcial
const sumWithTwo = sumCurrying(2)
console.log(sumWithTwo(1)(1))

console.log([1, 2, 3].map((value) => value * 2))

// Recriando a função map do array
const mapFunc = (array, func) => {
  const result = []
  for (let index = 0; index < array.length; index++) {
    result[index] = func(array[index])
  }
  return result
}

console.log(mapFunc([1, 2, 3], (value) => value * 2))

// Usando recursividade
function fibonacci(n) {
  return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(5))

// Create class
class Car {
  constructor(brand, name) {
    this.brand = brand
    this.name = name
  }
  get fullName() {
    return `${this.brand} - ${this.name}`
  }
  static honk() {
    return `${this.fullName}: Honk!`
  }
  brake() {
    return `Brake ${this.fullName}`
  }
}

// Extends class
class CarWithMultimedia extends Car {
  playSong(song) {
    return `Play '${song}' in ${this.fullName}`
  }
}

const car = new Car('VW', 'Gol')
console.log(car.brake())

const carWithMultimedia = new CarWithMultimedia('Ford', 'Fusion')
console.log(carWithMultimedia.brake())
console.log(carWithMultimedia.playSong('Metallica - Unforgiven'))

console.log(Car.honk())

// Tentando acessar um objeto nulo
const obj = null
console.log(obj.data)

// Chamando uma função nula
const func = null
console.log(func())

// Tratando erros
try {
  throw Error('boom!')
} catch (error) {
  console.log(error.message)
}

// JavaScript Assíncrono
setTimeout(() => {
  console.log('2 seg')
}, 2000)

setTimeout(() => {
  console.log('1 seg')
}, 1000)

let intValue = 0
const interval = setInterval(() => {
  console.log(intValue)
  intValue++
}, 500)

setTimeout(() => {
  clearInterval(interval)
}, 5000)

// Promises

const promiseResolved = new Promise((resolve, reject) => {
  resolve('success!!!')
})
const promiseRejected = new Promise((resolve, reject) => {
  reject('error!!!')
})

promiseResolved.then(console.log)
promiseRejected.then(console.log).catch(console.log)

async function asyncFunc() {
  const val = await promiseResolved
  return `Func: ${val}`
}

async function asyncErrorFunc() {
  try {
    const val = await promiseRejected
    return `Async: ${val}`
  } catch (error) {
    return `Func: ${error}`
  }
}

console.log(await asyncFunc())
console.log(await asyncErrorFunc())

const delay = (ms = 1000) => new Promise((res) => setTimeout(res, ms))

const delayedFunc = async () => {
  await delay(3000)
  return '3 seg delayed'
}

console.log(await delayedFunc())