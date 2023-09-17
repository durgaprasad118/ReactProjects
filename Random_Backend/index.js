import express from 'express'
import cors from "cors"
const app = express()
app.use(cors());
app.use(express.json())

app.get('/getrandomPassword', (req, res) => {
    console.log(req.headers.numberallowed);
  let numberAllowed = req.headers.numberallowed
  let charAllowed = req.headers.charallowed
  let length = req.headers.length 
  const passwordGenerator = () => {
    let pass = ''
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let numbers = '0123456789'
    let characters = '!~@#$%^&*(){}[],./?|'
    if (numberAllowed) str += numbers
    if (charAllowed) str += characters
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str[char]
    }
    return pass
  }
  const answer = passwordGenerator()
  res.status(200).json({ password: answer })
})

app.listen(4999, () => {
  console.log(`App running at 4999`)
})
