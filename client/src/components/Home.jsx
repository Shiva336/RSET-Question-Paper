// import Navbar from './Navbar';
import '../styles/home.css';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import SearchSuggestions from './SearchSuggestions';
function Home() {
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showLoginAsAdmin, setShowLoginAsAdmin] = useState(false);
  const [searchInitiated, setSearchInitiated] = useState(false);
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  let filteredSuggestions = [];
  if (searchText.length > 0)
    filteredSuggestions = suggestions.filter((suggestion) =>
      suggestion.name.toLowerCase().startsWith(searchText.toLowerCase())
    );

  const searchListClick = (param) => {
    // Handle when a suggestion is clicked
    // You can navigate or perform other actions here
  };

  const handleUserIconClick = () => {
    setShowLoginAsAdmin(!showLoginAsAdmin);
  };

  const openPDF = () => {
    const pdfPath = '/path-to-pdf.pdf';

    window.open(pdfPath, '_blank');
  };
  const handleLoginAsAdminClick = () => {
    navigate('/login');
  };
  const handleSearchButtonClick = () => {
    setSearchInitiated(true);
    // Implement your logic to fetch and display search results here
    // You can update the 'suggestions' state with the search results
  };

  return (
    <div className='bg-primary-color min-h-screen flex flex-col items-center justify-center'>
      {searchInitiated ? (
        // Display search bar at the top
        <div className='flex items-center space-x-4 mb-8 fixed top-0 left-0 right-0 bg-white p-4 z-10'>
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
          <button
            className='ml-4 bg-blue-500 text-white px-2 py-1 rounded-md'
            onClick={() => setSearchInitiated(false)}
          >
            Close
          </button>
        </div>
      ) : (
        // Display search bar in the center
        <div className='flex items-center space-x-4 mb-8'>
          <div className='flex items-center -mr-3 bg-white rounded-full px-4 py-2 focus:outline-none focus:ring focus:border-blue-300'>
            <input
              type='text'
              placeholder='Search...'
              value={searchText}
              onChange={handleSearchChange}
              className='searchInput w-full focus:outline-none text-xl'
            />
            <FaSearch
              className='text-gray-500 '
              onClick={handleSearchButtonClick}
            />
          </div>
        </div>
      )}

      <div className='flex items-center absolute top-1 right-2'>
        <button
          className='bg-blue-500 text-white px-2 py-1 mt-2 rounded-md'
          onClick={handleLoginAsAdminClick}
        >
          Login as Admin
        </button>
      </div>

      {searchText.length > 0 && filteredSuggestions.length > 0 && (
        <div className='search-focus'>
          <ul className='search-suggestions'>
            {filteredSuggestions.map((suggestion, index) => (
              <li
                className='searchlist'
                key={index}
                onClick={openPDF(suggestion)}
              >
                {suggestion.name}
                {suggestion.featured && (
                  <span className='featured-suggestion'>Featured</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
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
