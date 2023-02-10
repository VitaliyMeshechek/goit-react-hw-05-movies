import PropTypes from 'prop-types';

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
      name="name"
      autocomplete="off"
      placeholder="Search images and photos"
    />
  </Form>
  </Container>
   )
};


SearchMovie.propType = {
  onSubmit: PropTypes.func.isRequired,
};
