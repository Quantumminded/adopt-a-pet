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

  app.get('/animals', (req, res) => {
    res.send(`<h1>List of pets</h1>`)
})

app.get('/animals/:pet_type', (req, res) => {
    let pet_type = req.params.pet_type;
    let  html='';

    Object.keys(pets).forEach(function (key) {
        if (key === pet_type) {
          for(i=0;i<pets[key].length;i++)
            html += `<li> ${pets[key][i].name} </li>`
        }
    })
    let results = `<ul> ${html} </ul>`

    res.send(`<h1>List of ${pet_type} </h1> ${results} `)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })