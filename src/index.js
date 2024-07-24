const { exec } = require('child_process')
const { wechatUrl } = require('../config/index')

function main() {
  console.log('微信启动中')
  const process1 = exec(`"${wechatUrl}"`)
  const process2 = exec(`"${wechatUrl}"`)
  Promise.all([process1, process2]).then(() => {
    console.log('微信启动完成')
  }).catch(() => {
    console.log('程序执行出错')
  })
}

module.exports = main
