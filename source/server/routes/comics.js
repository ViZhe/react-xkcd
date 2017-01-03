
import {Router} from 'express'

import Comics from '../models/Comics'
// import {authMiddleware} from '../middleware'


const router = new Router()

const list = (req, res) => {
  Comics.find()
    .limit(5)
    .exec()
    .then(comics => res.json(comics))
    .catch(err => res.status(500).json(err))
}

const add = (req, res) => {
  console.log('comics', 'add', req, res)
  res.json({
    place: 'comics',
    type: 'item'
  })
  // const {name} = req.body
  //
  // Board.create({
  //   owner_id: req.userId,
  //   name
  // })
  //   .then(board => res.json(board))
  //   .catch(err => res.status(500).json(err))
}

const item = (req, res) => {
  console.log('comics', 'item', req, res)
  res.json({
    place: 'comics',
    type: 'item'
  })
}

const update = (req, res) => {
  console.log('comics', 'update', req, res)
  res.json({
    place: 'comics',
    type: 'update'
  })
}

const remove = (req, res) => {
  console.log('comics', 'remove', req, res)
  res.json({
    place: 'comics',
    type: 'remove'
  })
}

router
  // .all('*',
  //   authMiddleware.isAuthenticated
  // )
  .get('/', list)
  .post('/', add)
  .get('/:id', item)
  .put('/:id', update)
  .delete('/:id', remove)


export default router
