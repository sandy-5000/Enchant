import express from "express"
import cors from "cors"

const app = express()
app.use(cors())

app.get('/api', (_, res) => {
  res.json({ message: "Server [Enchant]" })
})

app.listen(3000, () => {
  console.log('visit http://localhost:3000/')
})
