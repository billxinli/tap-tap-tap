const { sum } = require('./lib')

function calculator (fn, input = 0) {
  if (fn === 'sum') {
    return sum(input)
  }
  return input
}

module.exports = {
  calculator
}
