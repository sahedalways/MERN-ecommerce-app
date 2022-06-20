import bcrypt from "bcryptjs"

const data = {
  users: [
    {
      name: "Sahed",
      email: "ssahed65@gmail.com",
      password: bcrypt.hashSync("12345678"),
      isAdmin: true,
    },

    {
      name: "Sahed Ahmed",
      email: "ssahed@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Polo Slim Shirt",
      slug: "polo-slim-shirt",
      category: "Shirts",
      image: "/Assets/p1.jpg",
      price: "30",
      countInStock: 10,
      brand: "Polo",
      rating: 4.5,
      numReviews: 10,
      description: "High Quality Polo Shirt",
    },

    {
      name: "Adidas Fit Jacket",
      slug: "adidas-fit-shirt",
      category: "Shirts",
      image: "/Assets/p2.jpg",
      price: "50",
      countInStock: 20,
      brand: "Adidas",
      rating: 4.0,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Armani Slim Pant",
      slug: "armani-slim-pant",
      category: "Pants",
      image: "/Assets/p3.jpg",
      price: "25",
      countInStock: 15,
      brand: "Armani",
      rating: 4.5,
      numReviews: 14,
      description: "high quality product",
    },
    {
      name: "Adidas Fit Pant",
      slug: "adidas-fit-pant",
      category: "Pants",
      image: "/Assets/p4.jpg",
      price: "65",
      countInStock: 0,
      brand: "Puma",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },

    {
      name: "Armani Gabadine Pant",
      slug: "armani-gabadine-pant",
      category: "Pants",
      image: "/Assets/p5.jpg",
      price: "55",
      countInStock: 5,
      brand: "Armani",
      rating: 4.9,
      numReviews: 10,
      description: "high quality product",
    },

    {
      name: "Plain Polo Shirt",
      slug: "plain-polo-shirt",
      category: "Pants",
      image: "/Assets/p6.jpg",
      price: "75",
      countInStock: 0,
      brand: "Polo",
      rating: 4.4,
      numReviews: 10,
      description: "high quality product",
    },
  ],
};

export default data;
