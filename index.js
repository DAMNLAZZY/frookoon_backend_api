const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Frookoon Backend API running");
});

app.get("/api/products", (req, res) => {
    res.json({
        success: true,
        data: [
            {
                id: "prod_101",
                name: "Wireless mouse",
                description: "Ergonomic wireless mouse",
                price: 799,
                stock: 120
            },
            {
               id: "prod_102",
                name: "Mechanical Keyboard",
                description: "Backlit mechanical keyboard",
                price: 2499,
                stock: 45 
            }
        ]
    });
});

app.post("/api/orders", (req, res) => {
    res.status(201).json({
        success: true,
        message: "order created successfully",
        order: {
            order_id: "order_001",
            status: "CREATED"
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});