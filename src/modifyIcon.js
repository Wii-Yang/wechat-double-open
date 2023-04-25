const ResEdit = require('resedit')
const PELibrary = require('pe-library')
const fs = require('fs')

const data = fs.readFileSync('./bin/wechat-double-open.exe')
const exe = PELibrary.NtExecutable.from(data)
const res = PELibrary.NtExecutableResource.from(exe)

const iconFile = ResEdit.Data.IconFile.from(fs.readFileSync('./src/assets/wechat.ico'))

ResEdit.Resource.IconGroupEntry.replaceIconsForResource(
  res.entries,
  1,
  1033,
  iconFile.icons.map((item) => item.data)
)

res.outputResource(exe)
const newBinary = exe.generate()
fs.writeFileSync('./bin/微信双开.exe', new Buffer.from(newBinary))
fs.unlink('./bin/wechat-double-open.exe', () => {
  console.log('生成exe文件成功...')
})
