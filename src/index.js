const { exec } = require('child_process')
const { wechatUrl, driveLetter } = require('../config/index')

function main() {
  exec(`"${wechatUrl}"`)
  exec(`"${wechatUrl}"`)
}

module.exports = main
