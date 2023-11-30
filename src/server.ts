
// Importando nossas bibliotecas para projeto 'PET'
import express  from "express"
import dotenv from "dotenv"
import mustache from "mustache-express"
import path from "path"

// Importando as 'Rotas' criadas:
import rotas_principais from './routers/index'



// Configurar dotenv -> .env PORT=3000  
dotenv.config()

// Configurar 'server' para poder rodar o servidor
const server = express()

// Configurar as pastas e rotas para as Views
server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())

// Configurar Pasta Publica
server.use(express.static(path.join(__dirname, '../public')))


// Inicializando Rotas-Rodando no servidor 
server.use(rotas_principais)

// Função que envia mensagem de 'Pagina não encontrada' quando não encontra a rota
server.use((req, res) => {
  res.send('Pagina não encontrada')
})


// servidor Rodando-escutando a porta configurada
server.listen(process.env.PORT)

