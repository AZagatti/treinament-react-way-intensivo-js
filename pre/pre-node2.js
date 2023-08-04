import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('Choose one number between 0 and 10.\n', (number) => {
  const selectedNumber = Math.round(Math.random() * 10)
  console.log(`The random selected number is: ${selectedNumber}`)
  if (selectedNumber === Number(number)) {
    console.log(`You choose '${number}' and you win!`)
  } else {
    console.log(`You choose '${number}' and you lose!`)
  }
  rl.close()
})
