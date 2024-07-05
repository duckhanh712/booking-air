import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import dotenv from 'dotenv'
// import cors from 'cors'
import statuses from 'statuses'
dotenv.config()

// Customize express response
express.response.sendStatus = function (
  statusCode: number,
  message: string = null,
) {
  const body = {
    message: message || statuses(statusCode) || String(statusCode),
  }
  this.statusCode = statusCode
  this.type('json')
  this.send(body)

  return this
}

// configs
const port = process.env.PORT || 3009
const app = express()
const server = http.createServer(app)

// enable files upload

// middlewares
// app.use(cors());
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// routes
import routes from "@routes/index"
routes(app)

server.listen(port, () => {
  console.log(`Running on port ${port} ⚡`)
})

// handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('There was an uncaught error', err)
  // process.exit(1) //mandatory (as per the Node.js docs)
})
