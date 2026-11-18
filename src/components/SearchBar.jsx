import "../Searchbar.css";
function SearchBar({ search_input, handleSearchInputChange, handleSearch }) {
  return (
    <div className="searchbar-container">
      <input
        className="product-searchbar"
        onChange={handleSearchInputChange}
        type="search"
        value={search_input}
        placeholder="Search Products ..."
      />
      <button className="search-btn" type="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
