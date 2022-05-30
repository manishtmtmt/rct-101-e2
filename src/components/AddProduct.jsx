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

const AddProduct = ({ setProducts }) => {
  const [data, setData] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onChange = (e) => {
    let { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  console.log(data);

  const onSubmit = () => {
    axios
      .get(`http://localhost:8080/products`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ ...data }),
      })
      .then((r) => {
        setProducts({ ...data, r });
        setData("");
      });
  };
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
              onChange={onChange}
            />
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
            <Text fontSize="lg" fontWeight="bold">
              Price
            </Text>
            <Input
              data-cy="add-product-price"
              placeholder="Price"
              name="price"
              onChange={onChange}
            />
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
