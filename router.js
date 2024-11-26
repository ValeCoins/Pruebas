const express = require("express")
const router = express.Router()

// Simulación de una base de datos en memoria
let items = Array.from({ length: 100 }, (_, i) => ({ id: i + 1, name: `Item ${i + 1}` }));


router.get("/", (req, res)=>{
    res.send("Acontinuación Veras Las Pruebas Realizadas Con JMeter")
})

router.get('/items', (req, res) => {
    res.status(200).json(items);
  });
  
  router.get('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find(i => i.id === id);
    if (item) {
      res.status(200).json(item);
    } else {
      res.status(404).json({ error: 'Item not found' });
    }
  });
  
  router.post('/items', (req, res) => {
    const { name } = req.body;
    const newItem = { id: items.length + 1, name };
    items.push(newItem);
    res.status(201).json(newItem);
  });
  
  router.put('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    const item = items.find(i => i.id === id);
    if (item) {
      item.name = name;
      res.status(200).json(item);
    } else {
      res.status(404).json({ error: 'Item not found' });
    }
  });
  
  router.delete('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = items.findIndex(i => i.id === id);
    if (index !== -1) {
      items.splice(index, 5);
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Item not found' });
    }
  });

module.exports = {
    router
}