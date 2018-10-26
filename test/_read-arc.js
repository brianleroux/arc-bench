let parse = require('@architect/parser')
let {readFileSync} = require('fs')
let {join} = require('path')

module.exports = function readArc() {
  let path = join(process.cwd(), '.arc')
  let raw = readFileSync(path).toString()
  return parse(raw)
}

