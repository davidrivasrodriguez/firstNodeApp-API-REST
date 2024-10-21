const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000

app.use(cors());

app.get('/', (req, res) => {
  const objectJSON = [
    {
      message: 'Hello, world!'
    },
    {
      message: 'Welcome to the server!'
    },
    {
      message: 'Enjoy your stay!'
    },
    {
      message: 'Goodbye!'
    }
  ];
  res.json(objectJSON)
})

app.listen(port, () => {
  console.log(`App running and listening on port: ${port}`)
})
