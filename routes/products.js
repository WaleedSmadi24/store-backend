// products routes
import express from 'express';

const productRoutes = express.Router();

let products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 }
];

// get all products
// localhost:3001/api/products/
productRoutes.get('/', (req, res) => {
    res.json(users);
})

// localhost:3001/api/users/2
productRoutes.get('/:id', (req, res) => {
    const product = products.find((item) => {
        if (item.id == req.params.id) {
            return item;
        }
    });
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ 'message': "product not found" })
    }
})

// add new user
// localhost:3001/api/users/
// POST
// body >> {"id":12,"name":"sherry","age":7}
productRoutes.post('/', (req, res) => {
    const newProduct = {
        id: Date.now(),
        name: req.body.name,
        price: req.body.price
    }
    products.push(newProduct);
    res.json(products);
})

productRoutes.put('/:id', (req, res) => {
    const product = products.find((item) => {
        if (item.id == req.params.id) {
            return item;
        }
    });
    if (product) {
        product.name = req.body.name;
        product.price = req.body.price;
        res.json(product);
    } else {
        res.status(404).json({ 'message': "product not found" })
    }
})

productRoutes.delete('/:id', (req, res) => {
    const product = products.find((item) => {
        if (item.id == req.params.id) {
            return item;
        }
    });
    if (product) {
        products = products.filter((item) => item.id != req.params.id);
        res.json(products);
    } else {
        res.status(404).json({ 'message': "product not found" })
    }
})
export default userRoutes;