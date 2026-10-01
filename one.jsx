/*
question 1 module 2 
Build an Online Product Catalog with search and category filtering using React event handling and conditional rendering.*/


import { useState } from "react";

const products = [
  ["Laptop", "Electronics"],
  ["Shirt", "Clothing"],
  ["Phone", "Electronics"],
  ["Shoes", "Footwear"]
];

export default function App() {
  const [search, setSearch] = useState("");

  const result = products.filter(p =>
    p[0].toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1>Product Catalog</h1>
      <input onChange={e => setSearch(e.target.value)} placeholder="Search" />

      {result.length ? result.map((p, i) =>
        <p key={i}>{p[0]} - {p[1]}</p>
      ) : <p>No products found</p>}
    </>
  );
}