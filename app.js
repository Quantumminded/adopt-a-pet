const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send (`
      <h1>Adopt a Pet!</h1>
      <p> Browse through the links below to find your new furry friend:.</p>
      <ul>
        <li><a href="/animals/dogs">Dogs</a></li>
        <li><a href="/animals/cats">Cats</a></li>
        <li><a href="/animals/rabbits">Rabbits</a></li>
      </ul> `)
  })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })