const http = require('http')
const chalk = require('chalk')
const conf = require('./config/defaultConfig')
console.log('aaaa')
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<html><body>Hello World!</body></html>')
})

server.listen(conf.port, conf.hostname, () => {
  const addr = `http://${conf.hostname}:${conf.port}`
  console.info(`Server started at ${chalk.green(addr)}`)
})
