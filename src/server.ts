import express, { Express, Request, Response, NextFunction } from 'express'
import morgan from 'morgan'

import asyncRequestWrapper from '../middleware/asyncRequestWrapper'

const app: Express = express()
const port: Number = Number(process.env.PORT) || 4000

// Logger middleware -> "tiny" means tiny logging output
app.use(morgan('tiny'))

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
