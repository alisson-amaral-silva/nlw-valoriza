import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { getCustomRepository } from 'typeorm'
import { UserRepository } from '../repositories/UserRepository'

interface IAuthenticateRequest {
  email: string
  password: string
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const userRepository = getCustomRepository(UserRepository)

    if (!email) {
      throw new Error('Email is null or empty')
    }

    const user = await userRepository.findOne({
      email,
    })

    if (!user) {
      throw new Error('Email/password incorrect')
    }

    //compara senha com hash
    const isPasswordCorrect = await compare(password, user.password)

    if (!isPasswordCorrect) {
      throw new Error('Email/password incorrect')
    }

    const token = sign(
      {
        email: user.email,
      },
      'a2860f2a6f27320b0d04be219d5f3490',
      {
        subject: user.id,
        expiresIn: '1d',
      },
    )

    return token
  }
}

export { AuthenticateUserService }
