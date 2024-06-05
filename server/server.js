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

  const result = await db.query(`SELECT * FROM comments`)
  const final = result.rows

  response.json(final)
})

app.post('/comments', (request, response) => {
  console.log(request.body)
  let username = request.body.username
  let location = request.body.location
  let content = request.body.content
  
  db.query(`INSERT INTO comments (username, location, content) VALUES ($1, $2, $3)`, [username, location, content])
  response.send("saved comment")
})

/*needed for form
app.get("/form", (request, response) => {
  response.json({ message: `form` });
});

app.post("/form", function (request, response) {
  response.json({ message: "you sent this to me" });
})

*/

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
})
