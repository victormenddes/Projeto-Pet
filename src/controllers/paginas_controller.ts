
import { Request, Response } from "express"

// Importar as funções de 'objetos' da pasta 'models'
import {Pet} from '../models/pet'


export const home = (req: Request, res: Response) => {

  let lista = Pet.getAll()

  res.render('paginas/pagina', {
    menu: {
      all: true,
      dog: false,
      cat: false,
      fishe: false
    },

    banner: {
      title: 'Todos os animais',
      background: 'allanimals.jpg'
    },

    lista

  })
}


// controller para pagina dos 'dogs-cachorros'
export const dogs = (req: Request, res: Response) => {

  let lista = Pet.getTipoPet('dog')

  res.render('paginas/pagina', {
    menu: {
      all: false,
      dog: true,
      cat: false,
      fishe: false
    },

    banner: {
      title: 'Cachorros',
      background: 'banner_dog.jpg'
    },

    lista

  })
}


// controller para pagina dos 'cats-gatos'
export const cats = (req: Request, res: Response) => {

  let lista = Pet.getTipoPet('cat')

  res.render('paginas/pagina', {
    menu: {
      all: false,
      dog: false,
      cat: true,
      fishe: false
    },

    banner: {
      title: 'Gatos',
      background: 'banner_cat.jpg'
    },

    lista

  })
}


// controller para pagina dos 'fishes-peixes'
export const fishes = (req: Request, res: Response) => {

  let lista = Pet.getTipoPet('fish')

  res.render('paginas/pagina', {
    menu: {
      all: false,
      dog: false,
      cat: false,
      fishe: true
    },

    banner: {
      title: 'Peixes',
      background: 'banner_fish.jpg'
    },

    lista

  })
}

