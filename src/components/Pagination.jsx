import { Box, Button, ButtonGroup, Flex, Select } from "@chakra-ui/react";
import React from "react";
import styles from "./styles.module.css";

const Pagination = ({ previous, next, onChange, first, last, page, lastPage }) => {
  return (
    <Box className={styles.buttonGroup} p="2">
    <ButtonGroup m="5">
      <Button data-cy="pagination-first-button" disabled={page <= 1} onClick={first}>
        First
      </Button>
      <Button data-cy="pagination-previous-button" disabled={page <= 1} onClick={previous}>
        Previous
      </Button>
      <Flex>
        <Select data-cy="pagination-limit-select" onChange={onChange}>
          <option value={3} data-cy="pagination-limit-3">
            3
          </option>
          <option value={6} data-cy="pagination-limit-6">
            6
          </option>
          <option value={9} data-cy="pagination-limit-9">
            9
          </option>
        </Select>
      </Flex>
      <Button data-cy="pagination-next-button" disabled={page === lastPage} onClick={next}>
        Next
      </Button>
      <Button data-cy="pagination-last-button" disabled={page === lastPage} onClick={last}>
        Last
      </Button>
    </ButtonGroup>
    </Box>
  );
};

export default Pagination;
