import { User } from "../entities/user.entity"

export class UserInputDTO {
    name: string
    email: string
  
    constructor(data?: Partial<User>) {
      this.name = data?.name || ''
      this.email = data?.email || ''
    }
  }