// Import necessary libraries
// Define the SearchSuggestions component
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

export default SearchSuggestions;
