import { UserInputDTO } from "../dto/user-input.dto"
import { UserOutputDTO } from "../dto/user-output.dto"
import { User } from "../entities/user.entity"
import { IUserRepository } from "../repositories/user.repository.interface"

export class UserUsecase {
  
  constructor(private readonly repository: IUserRepository){}

  async findAll() {
    const response = await this.repository.findAll()
    return response.map((item: User) => new UserOutputDTO(item))
  }

  async create(input: UserInputDTO) {
    const entity = new User(input)
    return await this.repository.create(entity)
  }
}
