import { User } from "../entities/user.entity"

export class UserOutputDTO {
    id: string
    name: string
    email: string
  
    constructor(data?: Partial<User>) {
      this.id = data?.id || ''
      this.name = data?.name || ''
      this.email = data?.email || ''
    }
  }