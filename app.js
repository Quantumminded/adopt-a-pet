const express = require('express')
const app = express()
const port = 3000

const pets = require('./helper')

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


app.get('/animals/:pet_type', (req, res) => {
    let pet_type = req.params.pet_type;
    let  html='';

    Object.keys(pets).forEach(function (key) {
        if (key === pet_type) {
          for(i=0;i<pets[key].length;i++)
            html += `<li> <a href="/animals/${key}/${pets[key][i].name}"> ${pets[key][i].name} </a></li>`
        }
    })
    let results = `<ul> ${html} </ul>`

    res.send(`<h1>List of ${pet_type} </h1> ${results} `)
})

app.get('/animals/:pet_type/:pet_id', (req, res) => {
    let pet = req.params.pet_type.pet_id
    
    res.send(`
      <h1>${req.params.name}</h1>
      <img src="#" alt="img of pet" />
      <p>pet’s description</p>
      <ul>
        <li>Pet's Breed</li>
        <li>Age</li>
      </ul>
      
      `)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })