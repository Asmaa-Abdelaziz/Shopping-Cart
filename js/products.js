const products = [
  {
    id: 1,
    title: "Dell XPS 13 Laptop",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.EKQx66VE1VwW9NbfyVF6HQHaEP&pid=Api",
    description:
      "Ultra-slim laptop with a 13-inch display, Intel Core i7 processor, 16GB RAM, and 512GB SSD storage.",
    price: 1899,
    added: false,
  },
  {
    id: 2,
    title: "MacBook Pro 16-inch",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.4caws4PGSzsB_1v0D8vENAHaG3&pid=Api",
    description:
      "Apple laptop with a 16-inch Retina display, M1 Pro processor, 32GB RAM, and 1TB SSD storage.",
    price: 3499,
    added: false,
  },
  {
    id: 3,
    title: "Apple AirPods Pro",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.DJxpGeJV0GdT3h2cLneAwgHaHa&pid=Api",
    description:
      "Wireless earbuds with noise cancellation, comfortable design, and up to 4.5 hours of battery life.",
    price: 249,
    added: false,
  },
  {
    id: 4,
    title: "Samsung Galaxy Watch 5",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.AEKV1HVwfNeyMX2Rk48fWAHaIe&pid=Api",
    description:
      "Smartwatch with a Super AMOLED display, advanced health sensors, and up to 40 hours of battery life.",
    price: 349,
    added: false,
  },
  {
    id: 5,
    title: "Samsung Galaxy S23 Phone",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.RJj_c7keIlyuH-fp_JUIMAHaEK&pid=Api",
    description:
      "Smartphone with a 6.1-inch Dynamic AMOLED display, Exynos 2200 processor, 50MP rear camera, and 128GB storage.",
    price: 799,
    added: false,
  },
  {
    id: 6,
    title: "iPhone 14 Pro",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.pAIzKDYX97-1NBsfnXKTPgHaHa&pid=Api",
    description:
      "Apple smartphone with a 6.1-inch Super Retina XDR display, A16 Bionic chip, 48MP rear camera, and 128GB storage.",
    price: 1099,
    added: false,
  },
  {
    id: 7,
    title: "Sony WH-1000XM5 Headphones",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.M4qOOqkDY5QY5sHSY_sBKgHaHa&pid=Api",
    description:
      "Over-ear headphones with noise cancellation, comfortable design, and up to 30 hours of battery life.",
    price: 399,
    added: false,
  },
  {
    id: 8,
    title: "Canon EOS R6 Camera",
    image:
      "https://tse4.mm.bing.net/th?id=OIP.NN9DJVBCKnuVsMvUFWX_YwHaHa&pid=Api",
    description:
      "Mirrorless camera with 20.1MP, 4K video recording, and advanced autofocus system.",
    price: 2499,
    added: false,
  },
  {
    id: 9,
    title: "Google Pixel 7 Phone",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.nLi4TbzItdd5Iuj6UPmRxgHaHa&pid=Api",
    description:
      "Smartphone with a 6.3-inch OLED display, Google Tensor processor, 50MP rear camera, and 128GB storage.",
    price: 599,
    added: false,
  },
  {
    id: 10,
    title: "Bose QuietComfort 45 Headphones",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.oltb0vZwXFRAw_6kPmBOZQHaHa&pid=Api",
    description:
      "Over-ear headphones with noise cancellation, comfortable design, and up to 24 hours of battery life.",
    price: 329,
    added: false,
  },
];

localStorage.setItem("productsAPI", JSON.stringify(products));
