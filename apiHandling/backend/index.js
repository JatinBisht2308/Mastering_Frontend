import express from "express";
const app = express();

const port = process.env.PORT || 3000;

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Product A",
      price: 29.99,
      image: "https://example.com/productA.jpg",
    },
    {
      id: 2,
      name: "Product B",
      price: 39.99,
      image: "https://example.com/productB.jpg",
    },
    {
      id: 3,
      name: "Product C",
      price: 49.99,
      image: "https://example.com/productC.jpg",
    },
    {
      id: 4,
      name: "Product D",
      price: 19.99,
      image: "https://example.com/productD.jpg",
    },
    {
      id: 5,
      name: "Product E",
      price: 59.99,
      image: "https://example.com/productE.jpg",
    },
  ];

  if (req.query.search) {
    console.log(req.query.search);
    const filterProduct = products.filter((product) =>
      product.name.includes(req.query.search)
    );
    res.send(filterProduct);
    return;
  }
  setTimeout(() => {
    res.send(products);
  }, 3000);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
