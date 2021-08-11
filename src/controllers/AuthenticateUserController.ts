import { Request, Response } from 'express'
import { AuthenticateUserService } from '../services/AuthenticateUserService'

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    try {
      const { email, password } = request.body

      const authenticateUserService = new AuthenticateUserService()

      const token = await authenticateUserService.execute({ email, password })

      return response.json(token)
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
}

export { AuthenticateUserController }
