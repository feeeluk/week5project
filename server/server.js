
import express from "express";
import cors from "cors";

const PORT = 8080;

const app = express();
app.use(cors());

app.get("/", (request, response) => {
  response.json({ message: `root` });
});

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
/*needed for form
app.get('/form', (request, response) => {
    response.json({message: `form`})
})

app.post("/form", function (request, response) {
    response.json({ message: "you sent this to me" });
  });
 
app.use(express.json());
*/
