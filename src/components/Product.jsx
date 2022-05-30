import React from "react";
import {
  Text,
  Stack,
  Image,
  Tag,
  TagLabel,
  Heading,
  Box,
  Flex,
} from "@chakra-ui/react";
import styles from "./styles.module.css";

const Product = ({ product }) => {
  // TODO: Remove below const and instead import them from chakra
  return (
    <Stack data-cy="product" className={styles.stack} p="5">
      <Image data-cy="product-image" src={product.imageSrc} className={styles.image} />
      <Flex justifyContent="space-between">
        <Text data-cy="product-category" textTransform="uppercase">{product.category}</Text>
        <Tag variant='subtle' colorScheme='cyan'>
          <TagLabel data-cy="product-gender" textTransform="uppercase">{product.gender}</TagLabel>
        </Tag>
      </Flex>
      <Heading data-cy="product-title" color='#4fd1cd' fontSize="xl">{product.title}</Heading>
      <Box data-cy="product-price">Rs. {product.price}/ unit</Box>
    </Stack>
  );
};

export default Product;
