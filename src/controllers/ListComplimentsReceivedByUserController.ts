import { Request, Response } from 'express'
import { ListComplimentsReceivedByUserService } from '../services/ListComplimentsReceivedByUserService'

class ListComplimentsReceivedByUserController {
  async handle(request: Request, response: Response) {
    try {
      const { user_id } = request.body

      const listComplimentsReceivedByUserService = new ListComplimentsReceivedByUserService()

      const user = await listComplimentsReceivedByUserService.execute(user_id)

      return response.json(user)
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
}

export { ListComplimentsReceivedByUserController }
