import { UserInputDTO } from "../dto/user-input.dto";
import { UserOutputDTO } from "../dto/user-output.dto";
import { IUserUsecase } from "../usecases/users.usecase.interface";

export class UserController {

  constructor(private readonly usecase: IUserUsecase) {}

  async findAll(): Promise<UserOutputDTO[]> {
    return await this.usecase.findAll()
  }

  async create(input: UserInputDTO): Promise<UserOutputDTO> {
    return await this.usecase.create(input)
  }
}
