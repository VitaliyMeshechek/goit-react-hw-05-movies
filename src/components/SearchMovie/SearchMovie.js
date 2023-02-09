import { toast } from 'react-toastify';
import { useState } from "react";
import { Container, Form, Button, Input, SearchIcon } from "./SearchMovie.styled";


export const SearchMovie = ({ onSubmit }) => {

  const handleSubmit = event => {
    event.preventDefault();
    const { value } = event.target.name;
    onSubmit(value);
  };

  // const resetForm = () => setSearchMovie('');

  return (
    <Container>
  <Form onSubmit={handleSubmit}>
    <Button type="submit">
      <span><SearchIcon /></span>
    </Button>

    <Input
      type="text"
      name="search"
      autocomplete="off"
      placeholder="Search images and photos"
    />
  </Form>
  </Container>
   )
};
