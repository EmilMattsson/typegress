import express, { Express, Request, Response, NextFunction } from 'express'

import asyncRequestWrapper from '../middleware/asyncRouteWrapper'

const app: Express = express()
const port: Number = Number(process.env.PORT) || 4000

app.get(
  '/',
  asyncRequestWrapper(
    async (req: Request, res: Response, next: NextFunction) => {
      res.send('Hello there!')
    }
  )
)

app.listen(port, () => {
  console.log(`server running at localhost:${port} `)
})
