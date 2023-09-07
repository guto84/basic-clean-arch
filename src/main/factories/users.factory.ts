import { UserController } from "../../controllers/users.controller"
import { UserModel } from "../../infra/database/user.model"
import { UserRepository } from "../../repositories/users.repository"
import { UserUsecase } from "../../usecases/users.usecase"

export const userFactory = () => {
  const userRepository = new UserRepository(UserModel)
  const usecase = new UserUsecase(userRepository)
  return new UserController(usecase)
}
