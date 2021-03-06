import { Request, Response } from 'express'
import { any } from 'zod'
import { createUser } from '../service/user.service'
import logger from '../utils/logger'

export async function createUserHandler(req: Request, res: Response) {
    try {
        const user = await createUser(req.body)
        return user
    } catch (e) {
        logger.error(e)
        return res.status(409).send(e.message)
    }
}