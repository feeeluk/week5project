import express from "express"
import cors from "cors"
import pg from "pg"
import dotenv from "dotenv"
import nocache from "nocache"

const PORT = 8080

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()
app.use(nocache())

const db = new pg.Pool({
    connectionString: process.env.CONNECTION_STRING
})

app.get('/', (request, response) => {
    response.json({message: `root`})
})

app.get('/comments', async (request, response) => {

  const result = await db.query(`SELECT * FROM comments ORDER BY comments DESC`)
  const final = result.rows

  response.json(final)
})

app.post('/comments', async (request, response) => {
  console.log(request.body)
  let username = request.body.username
  let location = request.body.location
  let content = request.body.content
  
  try {
    const comment = await db.query(`INSERT INTO comments (username, location, content) VALUES ($1, $2, $3)`, [username, location, content])
    response.status(200).json({savedComments:comment})
  } catch (error) {
     response.status(500).json({error: error})
  }
})

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
})
