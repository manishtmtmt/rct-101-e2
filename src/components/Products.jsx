import React, { useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import Product from "./Product";
import Pagination from "./Pagination";
import axios from "axios";
import { Flex, Grid } from "@chakra-ui/react";
import styles from "./styles.module.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  const [limit, setLimit] = useState(3);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(()=>{
    setLastPage(
      totalCount % limit === 0
        ? Math.floor(totalCount / limit)
        : Math.ceil(totalCount / limit)
    );
  },[totalCount, limit])

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
    <Flex flexDirection="column" className={styles.flex} p="4">
      <AddProduct setProducts={setProducts} products={products} />
      <Grid templateColumns="repeat(3, 1fr)" gap={5}>
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
        page={page}
        lastPage={lastPage}
      />
    </Flex>
  );
};

export default Products;
