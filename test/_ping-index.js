let tiny = require('tiny-json-http')

module.exports = async function ping(url) {
  let start = Date.now()
  let result = await tiny.get({url})
  let end = Date.now() - start
  return {body: result.body, ms:end}
}
