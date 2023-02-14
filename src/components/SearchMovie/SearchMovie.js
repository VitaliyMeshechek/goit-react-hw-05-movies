import PropTypes from 'prop-types';
// import { toast } from 'react-hot-toast';

import { Form, Button, Input, SearchIcon } from "./SearchMovie.styled";


  const SearchMovie = ({ onSubmit }) => {

  const handleSubmit = event => {
    event.preventDefault();
    const { value } = event.target.name;
    onSubmit(value);

    // if (!value.trim()) {
    //   toast.info('Please write your request', {
    //     autoClose: 2000,
    //   });
    //   return;
    // }
  };

  return (
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
   )
};

export default SearchMovie;

SearchMovie.propType = {
  onSubmit: PropTypes.func.isRequired,
};
