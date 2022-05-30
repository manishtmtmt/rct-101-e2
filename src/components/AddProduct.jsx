import {
  Button,
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
import axios from "axios";
import React, { useState } from "react";

const AddProduct = () => {
  const [data, setData] = useState({})
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = React.useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Hello")
  }
  return (
    <>
      <Button my={4} data-cy="add-product-button" onClick={onOpen}>
        Add New Product
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalBody pb={6}>
          <Heading>Add New Product</Heading>
          <FormControl>
            <Text fontSize="lg" fontWeight="bold">
              Title
            </Text>
            <Input
              data-cy="add-product-title"
              placeholder="Title"
              name="title"
            />
            <Text fontSize="lg" fontWeight="bold">
              Category
            </Text>
            <Select
              data-cy="add-product-category"
              placeholder="Category"
              name="category"
            >
              <option data-cy="add-product-category-shirt">Shirt</option>
              <option data-cy="add-product-category-pant">Pant</option>
              <option data-cy="add-product-category-jeans">Jeans</option>
            </Select>
            <Text fontSize="lg" fontWeight="bold">
              Gender
            </Text>
            <RadioGroup data-cy="add-product-gender" value={value} name="gender">
              <Radio data-cy="add-product-gender-male" value="Male">
                Male
              </Radio>
              <Radio data-cy="add-product-gender-female" value="Female">
                Female
              </Radio>
              <Radio data-cy="add-product-gender-unisex" value="Unisex">
                Unisex
              </Radio>
            </RadioGroup>
            <Text fontSize="lg" fontWeight="bold">
              Price
            </Text>
            <Input data-cy="add-product-price" placeholder="Price" name="price" />
            <Button data-cy="add-product-submit-button" onClick={onSubmit}>
              Submit
            </Button>
            <Button onClick={onClose}>Close</Button>
          </FormControl>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
