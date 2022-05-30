import { Button, ButtonGroup, Select } from "@chakra-ui/react";
import React from "react";

const Pagination = ({ previous, next, onChange, first, last }) => {
  

  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button" onClick={first}>First</Button>
      <Button data-cy="pagination-previous-button" onClick={previous}>
        Previous
      </Button>
      <Select data-cy="pagination-limit-select" onChange={onChange}>
        <option value={3} data-cy="pagination-limit-3">3</option>
        <option value={6} data-cy="pagination-limit-6">6</option>
        <option value={9} data-cy="pagination-limit-9">9</option>
      </Select>
      <Button data-cy="pagination-next-button" onClick={next}>
        Next
      </Button>
      <Button data-cy="pagination-last-button" onClick={last}>Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
