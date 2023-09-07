import express, { Router, Request, Response } from 'express'
import mongoose from 'mongoose'
import { userFactory } from './main/factories/users.factory';
import { UserInputDTO } from './dto/user-input.dto';

const app = express();
const route = Router()
app.use(express.json())

// o correto é criar um adapter do express
// ver projeto do manguinho

route.get('/', async (req: Request, res: Response) => {
  const response = await userFactory().findAll()
  res.json(response)
})

route.post('/', async (req: Request, res: Response) => {
  const input = new UserInputDTO()
  input.name = req.body.name
  input.email = req.body.email
  const response = await userFactory().create(input)
  res.json(response)
})

app.use(route)

app.listen(5000, async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/basic-clean-arch')
})
