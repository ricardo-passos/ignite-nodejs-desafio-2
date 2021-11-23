import { User } from '../../model/User'
import { IUsersRepository } from '../../repositories/IUsersRepository'

interface IRequest {
  name: string
  email: string
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    if (!email && !name) {
      throw new Error('mensagem de erro')
    }

    const emailAlreadyTaken = this.usersRepository.findByEmail(email)

    if (emailAlreadyTaken) {
      throw new Error('mensagem de erro')
    }

    const user = this.usersRepository.create({ name, email })

    return user
  }
}

export { CreateUserUseCase }
