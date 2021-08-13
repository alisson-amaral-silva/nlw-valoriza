import { Request, Response } from 'express'
import { ListComplimentsSentByUserService } from '../services/ListComplimentsSentByUserService'

class ListComplimentsSentByUserController {
  async handle(request: Request, response: Response) {
    try {
      const { user_id } = request.body

      const listComplimentsSentByUserService = new ListComplimentsSentByUserService()

      const user = await listComplimentsSentByUserService.execute(user_id)

      return response.json(user)
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
}

export { ListComplimentsSentByUserController }
