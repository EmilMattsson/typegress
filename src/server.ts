import express, { Express, Request, Response, NextFunction, RequestHandler } from 'express'
import morgan from 'morgan'

import asyncRequestWrapper from './middleware/asyncRequestWrapper'

const app: Express = express()
const logger: RequestHandler = morgan('dev')
const port: Number = Number(process.env.PORT) || 4000

app.use(logger)

app.get(
  '/',
  asyncRequestWrapper(
    async (req: Request, res: Response, next: NextFunction) => {
      res.send('Hello there!')
    }
  )
)

app.listen(port, () => {
  console.log(`server running at localhost:${port}`)
})
