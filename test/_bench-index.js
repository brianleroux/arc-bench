let ping = require('./_ping-index')

module.exports = async function bench(url, number) {
  let ops = []
  for (let i = 0; i < number; i++) {
    ops.push(ping(url))
  }
  return await Promise.all(ops)
}
