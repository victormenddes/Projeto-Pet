
import { Router }  from "express"

// Importar os controllers criados:
import * as paginas_controller from '../controllers/paginas_controller'
import * as pesquisa_controller from '../controllers/pesquisa_controller'


const router = Router()


// Criar a rota 'home' e 'pesquisa'
router.get('/', paginas_controller.home)
router.get('/dogs', paginas_controller.dogs)
router.get('/cats', paginas_controller.cats)
router.get('/fishes', paginas_controller.fishes)

// Criar a rota 'pesquisa/busca'
router.get('/pesquisa', pesquisa_controller.pesquisa)

// Depois da rota criada - temos que ir no arquivo 'server.ts' importar a rota
export default router 
