import { useState } from 'react';
import { Form, Input } from 'rsuite';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  let handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  let onFormSubmit = (event) => {
    // event.preventDefault();
    // TODO: call callback from parent component
  };

  return (
    <div className='search-bar ui segment'>
      <Form onSubmit={onFormSubmit} className='ui form'>
        <div className='field'>
          <label>Video Search</label>
          <Input
            value={searchTerm}
            onChange={(value, event) => {
              handleInputChange(event);
              console.log(value, event);
            }}
            type='text'
          />
        </div>
      </Form>
    </div>
  );
}

export default SearchBar;

// FORM ELEMENT
// LABEL
// TEXT INPUT
