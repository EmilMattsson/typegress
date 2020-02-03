import { Request, Response, NextFunction } from 'express'

const asyncRequestWrapper = (fn: Function) => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Promise.resolve(fn(req, res, next)).catch(next)
}

export default asyncRequestWrapper
