import React from 'react'

function Search({ query, onChange }) {

    return (
      <div>
        <input
        type='text'
        value={query}
        onChange={onChange}
        />
      </div>
    );
  }

export default Search;
