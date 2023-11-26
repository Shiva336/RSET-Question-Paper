// import Navbar from './Navbar';
import '../styles/home.css';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function SearchSuggestions({ suggestions, onSuggestionClick }) {
  if (suggestions.length === 0) return null;

  return (
    <div className='search-focus'>
      <ul className='search-suggestions'>
        {suggestions.map((suggestion) => (
          <li
            className='searchlist'
            key={suggestion._id}
            onClick={() => onSuggestionClick(suggestion._id)}
          >
            {suggestion.name}
            {suggestion.featured && (
              <span className='featured-suggestion'>Featured</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Home() {
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showLoginAsAdmin, setShowLoginAsAdmin] = useState(false);
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    // Fetch and set suggestions based on the searchText
    // Replace this with your actual suggestion fetching logic
  };

  const searchListClick = (param) => {
    // Handle when a suggestion is clicked
    // You can navigate or perform other actions here
  };

  const handleUserIconClick = () => {
    setShowLoginAsAdmin(!showLoginAsAdmin);
  };

  const handleLoginAsAdminClick = () => {
    navigate('/login');
  };
  return (
    <div className='bg-primary-color min-h-screen flex flex-col items-center justify-center'>
      {/* Search Bar */}
      <div className='flex items-center space-x-4 mb-8'>
        <div className='flex items-center bg-white rounded-full px-4 py-2 focus:outline-none focus:ring focus:border-blue-300'>
          <input
            type='text'
            placeholder='Search...'
            value={searchText}
            onChange={handleSearchChange}
            className='searchInput w-full focus:outline-none text-xl'
          />
          <FaSearch className='text-gray-500' />
        </div>
      </div>

      <div className='flex items-center absolute top-1 right-2'>
        <button
          className='bg-blue-500 text-white px-2 py-1 mt-2 rounded-md'
          onClick={handleLoginAsAdminClick}
        >
          Login as Admin
        </button>
      </div>

      <SearchSuggestions
        suggestions={suggestions}
        onSuggestionClick={searchListClick}
      />
    </div>
  );
}

export default Home;
/*
<div className='nav-bar'>
        <Navbar />
      </div>
      <br />
      <br />
      <div className='text-center'>
        <h1 className='text-3xl font-semibold mb-4'>
          Semester Wise Question Papers
        </h1>
      </div>
      <div className='flex flex-col justify-center items-center h-full'>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 p-4'>
          {numbers.map((number) => (
            <button
              key={number}
              onClick={() => navigate(`/semester/${number}`)} // Use onClick and provide a function
              className='bg-secondary-color text-white p-4 rounded-lg text-center h-32 w-24 flex flex-col items-center justify-center divcard'
            >
              <span className='text-2xl'>{number}</span>
            </button>
          ))}
        </div>
      </div>

    */
