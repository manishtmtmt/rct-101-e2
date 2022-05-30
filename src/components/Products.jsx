import React, { useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import Product from "./Product";
import Pagination from "./Pagination";
import axios from "axios";
import { Flex, Grid } from "@chakra-ui/react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`)
      .then((r) => {
        setProducts(r.data);
        setTotalCount(Number(r.headers["x-total-count"]));
      });
  }, [page, limit]);

  const next = () => {
    setPage(page + 1);
  };

  const previous = () => {
    setPage(page - 1);
  };

  const onChange = ({ target }) => {
    setLimit(Number(target.value));
  };

  const first = () => {
    setPage(1);
  };

  const last = () => {
    totalCount % limit === 0
      ? setPage(Math.floor(totalCount / limit))
      : setPage(Math.ceil(totalCount / limit));
  };

  return (
    <Flex>
      <AddProduct setProducts={setProducts} products={products} />
      <Grid>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Grid>
      <Pagination
        next={next}
        previous={previous}
        onChange={onChange}
        first={first}
        last={last}
      />
    </Flex>
  );
};

export default Products;
