const fs = require('fs')
const { count } = require('console')
const caminho = __dirname + '/arquivo.json'

// sincrono...
const couteudo = fs.readFileSync(caminho, 'utf-8')
console.log(couteudo)

// assincrono...
fs.readFile(caminho, 'utf8', (err, conteudo) => {
    const config = JSON.parse(couteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})