import { Request, Response } from 'express'
import { CreateTagService } from '../services/CreateTagService'

class CreateTagController {
  async handle(request: Request, response: Response) {
    try {
      const { name } = request.body

      const createTagService = new CreateTagService()

      const user = await createTagService.execute({ name })

      return response.json(user)
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
}

export { CreateTagController }
