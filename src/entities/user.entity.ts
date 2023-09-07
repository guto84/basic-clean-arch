export class User {
  id: string
  name: string
  email: string

  constructor(data?: Partial<User>) {
    this.id = data?.id || ''
    this.name = data?.name || ''
    this.email = data?.email || ''
  }
}