import PropTypes from 'prop-types';
import { useState } from 'react';

const WAITING_INTERVAL = 300;

const Search = props => {
  const [query, setQuery] = useState('');

  let TIMER = null;

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit(query);
  };

  const handleChange = e => {
    e.preventDefault();
    clearInterval(TIMER);
    setQuery(e.target.value);
    TIMER = setTimeout(() => props.onSubmit(query), WAITING_INTERVAL);
  };

  return (
    <form
      className="group sticky top-0 z-50 bg-white px-4 sm:px-6 lg:px-16 shadow"
      onSubmit={handleSubmit}
    >
      <div className="max-w-container mx-auto flex">
        <label
          htmlFor="search-input"
          className="flex-none pr-3 flex items-center"
        >
          <span className="sr-only">Search all ~20K icons</span>
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="text-gray-400 group-focus-within:text-gray-500 transition-colors duration-150"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </label>
        <input
          type="text"
          id="search-input"
          value={query}
          onChange={handleChange}
          placeholder="Search all ~20k icons (Press “/” to focus)"
          className="flex-auto py-6 text-base leading-6 text-gray-500 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400"
        />
      </div>
    </form>
  );
};

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Search;
