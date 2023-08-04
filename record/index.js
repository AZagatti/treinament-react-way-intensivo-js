// Comentários

/**
 * Comentários
 * diversas
 * linhas
 */

// Logs
// console.log('Hello World!')
// console.warn('Aviso')
// console.error('Erro')

// Variáveis
var a = 0
let b = 0
const c = 0
// console.log(a, b, c)

// Tipos primitivos
const number = 0
const string = 'text'
const varNull = null
const varUndefined = undefined
const varSymbol = Symbol()
const boolean = true

// Checando os tipos
// console.log(typeof number)
// console.log(typeof string)
// console.log(typeof varNull)
// console.log(typeof varUndefined)
// console.log(typeof varSymbol)
// console.log(typeof boolean)

// Comparando tipos primitivos
// console.log(number === 0)
// console.log(string === 'text')
// console.log(varNull === null)
// console.log(varUndefined === undefined)
// console.log(varSymbol.toString() === Symbol().toString())
// console.log(boolean === true)

// Tipos não primitivos
const object = {}
const func = function () {}
const date = new Date()
const array = []
const map = new Map()
const set = new Set()

// Checando os tipos não primitivos
// console.log(typeof object)
// console.log(typeof func)
// console.log(typeof date)
// console.log(typeof array)
// console.log(typeof map)
// console.log(typeof set)

// Comparando tipos não primitivos
// console.log(object === {})
// console.log(func === function () {})
// console.log(date === new Date())
// console.log(array === [])
// console.log(map === new Map())
// console.log(set === new Set())

const newObject = object
// console.log(object === newObject)

// console.log(object)
newObject.name = 'Zagatti'
// console.log(object)

// Escopo
{
  var a = 1
  let b = 1
  const c = 1
}

// console.log(a, b, c)

// Operadores de comparação
// console.log(a == b)
// console.log(a === b)
// console.log('1' == 1)
// console.log('1' === 1)
// console.log('1' != 1)
// console.log('1' !== 1)
// console.log(a > b)
// console.log(a < b)
// console.log(2 >= 2)
// console.log(2 <= 2)

// Operadores matemáticos
// console.log(2 + 2)
// console.log(2 - 2)
// console.log(2 / 2)
// console.log(2 * 2)
// console.log(2 % 2)

// Operadores lógicos
// console.log(true && 'is true')
// console.log(false && 'is true')
// console.log(false || 'is false')
// console.log(undefined || 'is undefined')
// console.log(null || 'is null')
// console.log(0 ?? 'new operator')

// If-else e switch
const x = 2
const y = 1

// if (x > 0) {
//   console.log('x is big than 0')
// } else if (y === 0) {
//   console.log('y is equal to 0')
// } else {
//   console.log('finish branch')
// }

// switch (x) {
//   case 1:
//     console.log('x is one')
//     break
//   case 0:
//     console.log('x is equal to 0')
//     break
//   default:
//     console.log('finish branch')
//     break
// }

// Loops
// for (let index = 0; index <= 3; index++) {
//   console.log(index)
// }
// console.log('###')
// for (let index = 3; index >= 0; index--) {
//   console.log(index)
// }
// console.log('###')
// let index = 0
// while (index <= 3) {
//   console.log(index)
//   index++
// }
// console.log('###')
// index = 0
// do {
//   console.log(index)
//   index++
// } while (index <= 3)
// console.log('###')
// index = 1
// while (index < 0) {
//   console.log(index)
//   index++
// }
// console.log('###')
// index = 1
// do {
//   console.log(index)
//   index++
// } while (index < 0)

// Criando uma função de soma
// function sum(firstNumber, secondNumber) {
//   return firstNumber + secondNumber
// }
// console.log(sum(1, 2))
// console.log(sum(3, 2))

// const countTo = (max) => {
//   const array = []
//   for (let i = 0; i <= max; i++) {
//     array.push(i)
//   }
//   return array
// }
// console.log(countTo(10))

// function sumCurryingFn(firstNumber) {
//   return function (secondNumber) {
//     return function (thirdNumber) {
//       return firstNumber + secondNumber + thirdNumber
//     }
//   }
// }

// const sumCurrying = (firstNumber) => (secondNumber) => (thirdNumber) =>
//   firstNumber + secondNumber + thirdNumber

// console.log(sumCurrying(1)(1)(1))

// const sumWithTwo = sumCurrying(2)
// console.log(sumWithTwo(1)(1))

// console.log([1, 2, 3].map((value) => value * 2))

// const mapFunc = (array, func) => {
//   const result = []
//   for (let i = 0; i < array.length; i++) {
//     result[i] = func(array[i])
//   }
//   return result
// }

// console.log(mapFunc([1, 2, 3], (value) => value * 2))

// function fibonacci(n) {
//   return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2)
// }

// console.log(fibonacci(40))

// OOP e classes
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

class CarWithMultimedia extends Car {
  playSong(song) {
    return `Play '${song}' in ${this.fullName}`
  }
}

// const car = new Car('VW', 'Gol')
// console.log(car.brake())

// const newCar = new CarWithMultimedia('Ford', 'Fusion')
// console.log(newCar.brake())
// console.log(newCar.playSong('Metallica - Unforgiven'))

// console.log(Car.honk())

// Erros
// const obj = {}
// console.log(obj.data?.name)

// const fun = null
// console.log(fun?.())

// try {
//   throw Error('boom!')
// } catch (error) {
//   console.log(error.message)
// }

// Async
// setTimeout(() => {
//   console.log('2 seg')
// }, 2000)

// setTimeout(() => {
//   console.log('1 seg')
// }, 1000)

// let int = 0
// const interval = setInterval(() => {
//   console.log(int)
//   int++
// }, 500)

// setTimeout(() => {
//   clearInterval(interval)
// }, 5000)

// Promises

const promisedResolved = new Promise((resolve, reject) => {
  resolve('success!!')
})
const promisedRejected = new Promise((resolve, reject) => {
  reject('error!!')
})

promisedResolved.then(console.log)
promisedRejected.then(console.log).catch(console.log)

async function asyncFn() {
  const val = await promisedResolved
  return `Func: ${val}`
}

async function asyncErrorFn() {
  try {
    const val = await promisedRejected
    return val
  } catch (error) {
    return `Func: ${error}`
  }
}

asyncFn().then(console.log)
asyncErrorFn().then(console.log)

const delay = (ms = 1000) => new Promise((res) => setTimeout(res, ms))

const delayedFn = async () => {
  await delay(3000)
  return '3 seg delayed'
}

delayedFn().then(console.log)
