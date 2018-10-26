let test = require('tape')
let deploy = require('./_deploy-index')
let ping = require('./_ping-index')
let bench = require('./_bench-index')

// config
let https = require('https')
https.globalAgent.maxSockets = 500
let url = 'https://u62qt4kbok.execute-api.us-east-1.amazonaws.com/staging'
let results = []

test('get /', async t=> {
  t.plan(2)
  try {

    let deployment = await deploy()
    t.ok(deployment, 'deployed')

    let result = await ping(url)
    t.ok(result, 'pinged')

    results.push(deployment)
    results.push(result)
  }
  catch(e) {
    t.fail(e)
  }
})

test('get / a bunch', async t=> {
  t.plan(6)
  try {

    let deployment = await deploy()
    t.ok(deployment, 'deployed')
    let result = await bench(url, 50)
    t.ok(result, 'pinged url with 50 requests')

    let deployment1 = await deploy()
    t.ok(deployment1, 'deployed')
    let result1 = await bench(url, 50)
    t.ok(result, 'pinged url with 50 requests')

    let deployment2 = await deploy()
    t.ok(deployment2, 'deployed')
    let result2 = await bench(url, 50)
    t.ok(result, 'pinged url with 50 requests')

    results.push(deployment)
    results.push(result)
    results.push(deployment1)
    results.push(result1)
    results.push(deployment2)
    results.push(result2)
  }
  catch(e) {
    t.fail(e)
  }
})


test('print results', t=> {
  t.plan(1)
  t.ok(true, 'printed')
  console.log(results)
})
