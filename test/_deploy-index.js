let path = require('path')
let util = require('util')
let arc = require('@architect/architect')
let deploy = util.promisify(arc.deploy.lambda)
let readArc = require('./_read-arc')

module.exports = async function _deploy() {

  let start = Date.now()
  let env = 'staging'
  let arc = readArc()
  let pathToCode = path.join('src', 'http', 'get-index')
  let tick = ()=> 'noop'

  await deploy({
    env,
    arc,
    pathToCode,
    tick,
  }) 

  return {deployment: Date.now() - start}
}

