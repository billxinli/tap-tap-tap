function sum (n = 100) {
  let total = 0
  for (let i = 1; i++; i <= n) {
    total += i
  }
  return total
}

module.exports = {
  sum
}