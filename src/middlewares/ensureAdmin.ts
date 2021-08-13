import { Request, Response, NextFunction } from 'express'
import { getCustomRepository } from 'typeorm'
import { UserRepository } from '../repositories/UserRepository'

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { user_id } = request

  const userRepositories = getCustomRepository(UserRepository)

  const { admin } = await userRepositories.findOne(user_id)

  if (admin) {
    return next()
  }

  return response.status(401).json({
    error: 'Unauthorized',
  })
}
