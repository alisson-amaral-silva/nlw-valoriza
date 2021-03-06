import { Request, Response } from 'express'
import { ListTagsService } from '../services/ListTagsService'

class ListTagsController {
  async handle(request: Request, response: Response) {
    try {
      const listTagsService = new ListTagsService()

      const tags = await listTagsService.execute()

      return response.json(tags)
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
}

export { ListTagsController }

