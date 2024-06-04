import express from "express"
import cors from "cors"

const PORT = 8080


const app = express()
app.use(cors())

// const db = new pg.Pool({
//     connectionString: process.env.CONNECTION_STRING
// })


app.get('/', (request, response) => {
    response.json({message: `root`})
})

app.listen(PORT, () => {
    console.log(`(*・‿・)ノ⌒*:･ﾟ✧ server running on port: ${PORT}`)
})
