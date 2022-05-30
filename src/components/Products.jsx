import React, { useEffect, useState } from "react";
import AddProduct from "./AddProduct"
import Product from "./Product"
import Pagination from "./Pagination"
import axios from "axios"
import { Flex, Grid } from "@chakra-ui/react";

const Products = () => {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(3)
  const [totalCount, setTotalCount] = useState(0)

  useEffect(()=>{
    axios
    .get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`)
    .then((r)=>{
      // console.log(r.data)
      setProducts(r.data)
      
    })
  },[])
  console.log(products)

  const addProduct = (newProduct) => {

  }

  return (
    <Flex>
      <AddProduct  />
      <Grid>{products.map((product)=>(
        <Product key={product.id} product={product} />
      ))}</Grid>
      <Pagination />
    </Flex>
  );
};

export default Products;
