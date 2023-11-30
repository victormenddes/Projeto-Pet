
import { Request, Response } from "express"

// Importar 'funções' da pasta 'models'
import {Pet} from '../models/pet' 

export const pesquisa = (req: Request, res: Response) => {

  let query: string = req.query.q as string // pegar nome usuario digitar na 'busca'

  let lista = Pet.getNomePet(query)
  
  res.render('paginas/pesquisa')
  lista
}


// 

