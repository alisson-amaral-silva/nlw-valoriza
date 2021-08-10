import { getCustomRepository } from 'typeorm'
import { TagRepository } from '../repositories/TagRepository'

interface ITagRequest {
  name: string
}

class CreateTagService {
  async execute({ name }: ITagRequest) {
    const tagRepository = getCustomRepository(TagRepository)

    if (!name) {
      throw new Error('Name is null or empty')
    }

    const tagAlreadyExists = await tagRepository.findOne({
      name,
    })

    if (tagAlreadyExists) {
      throw new Error('tag already exists')
    }

    const user = tagRepository.create({
      name,
    })

    await tagRepository.save(user)

    return user
  }
}
export { CreateTagService }
