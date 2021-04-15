/**
 * Tomando como datasource data/users.json
 * 1. Desarrollar una API REST con los endpoints que permita:
 *      1.1. Listar todos los usuarios 
 *      1.2. Devuelva un usuario por ID, por ejemplo /api/users/4 devuelve el usuario cuyo id es 4:
 *      1.3. Inserte el siguiente user y retorne el listado de todos
 * {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
          "lat": "-38.2386",
          "lng": "57.2232"
        }
      },
      "phone": "024-648-3804",
      "website": "ambrose.net",
      "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
      }
    }
 *
 */

    const express = require('express')
    const bodyParser = require('body-parser')
    const json = require('./data/users.json')
    const app = express()
     
    app.get('/api/users/list', function (req, res) {
      res.send(json)
    })

    app.get('/api/users/:id', function (req, res) {
      json.map(x=>{if(x.id==req.params.id)return res.send(x)})
    })

    app.post('/api/users/add', function (req, res) {
        let newJSon = {
          ...json,
          ...req.body
        }

        res.send(newJSon);
    })
     
    app.listen(3000)