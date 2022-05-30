import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Modal,
  ModalBody,
  Radio,
  RadioGroup,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import styles from './styles.module.css'

const AddProduct = ({ setProducts, products }) => {
  const [data, setData] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onChange = (e) => {
    let { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
      "imageSrc":
        "https://i.picsum.photos/id/294/422/262.jpg?hmac=wch3sY2mDv9xnRAAcA6otJUw2AP6jhIAZQtba3LYgKc",
    });
  };

  const onSubmit = () => {
    onClose();
    fetch(`http://localhost:8080/products`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...data }),
    })
      .then((r) => r.json())
      .then((d) => {
        setProducts([...products, d]);
        setData("");
      });
  };
  return (
    <>
      <Button my={4} data-cy="add-product-button" onClick={onOpen} className={styles.button} >
        Add New Product
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalBody pb={6} className={styles.modalBody} p="6">
          <Heading fontSize="2xl">Add New Product</Heading>
          <FormControl>
            <Flex flexDirection="column" gap="3" p="4">
              <Box>
            <Text fontSize="lg" fontWeight="bold">
              Title
            </Text>
            <Input
              data-cy="add-product-title"
              placeholder="Title"
              name="title"
              onChange={onChange}
            />
            </Box>
            <Box>
            <Text fontSize="lg" fontWeight="bold">
              Category
            </Text>
            <Select
              data-cy="add-product-category"
              placeholder="Category"
              name="category"
              onChange={onChange}
            >
              <option data-cy="add-product-category-shirt">Shirt</option>
              <option data-cy="add-product-category-pant">Pant</option>
              <option data-cy="add-product-category-jeans">Jeans</option>
            </Select>
            </Box>
            <Box>
            <Text fontSize="lg" fontWeight="bold">
              Gender
            </Text>
            <RadioGroup data-cy="add-product-gender" name="gender">
              <Radio
                data-cy="add-product-gender-male"
                value="Male"
                name="gender"
                onChange={onChange}
              >
                Male
              </Radio>
              <Radio
                data-cy="add-product-gender-female"
                value="Female"
                name="gender"
                onChange={onChange}
              >
                Female
              </Radio>
              <Radio
                data-cy="add-product-gender-unisex"
                value="Unisex"
                name="gender"
                onChange={onChange}
              >
                Unisex
              </Radio>
            </RadioGroup>
            </Box>
            <Box>
            <Text fontSize="lg" fontWeight="bold">
              Price
            </Text>
            <Input
              data-cy="add-product-price"
              placeholder="Price"
              name="price"
              onChange={onChange}
            />
            </Box>
            <Flex gap={2}>
            <Button data-cy="add-product-submit-button" onClick={onSubmit}>
              Submit
            </Button>
            <Button onClick={onClose}>Close</Button>
            </Flex>
            </Flex>
          </FormControl>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
