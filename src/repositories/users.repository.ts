import { User } from '../entities/user.entity'
import { IUserRepository } from './user.repository.interface'

export class UserRepository implements IUserRepository {
  
  constructor(
    private readonly model: any
  ){}

  async findAll() {
    const data = await this.model.find({})
    return data.map((item: User) => new User(item))
  }

  async create(input: User) {
    const user = new this.model({ name: input.name, email: input.email })
    const data = await user.save()
    return new User(data)
  }
}
