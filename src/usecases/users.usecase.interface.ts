import { UserInputDTO } from "../dto/user-input.dto";
import { UserOutputDTO } from "../dto/user-output.dto";

export interface IUserUsecase {
  findAll(): Promise<UserOutputDTO[]>
  create(input: UserInputDTO): Promise<UserOutputDTO> 
}