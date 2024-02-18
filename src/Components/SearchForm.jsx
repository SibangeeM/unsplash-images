import React from "react";
import { useGlobalContext } from "./Context";

const SearchForm = () => {
  const { setSearchTerm, isDarkTheme } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    //   console.log(e.target.elements)
    const searchValue = e.target.elements.search.value;
    if (!searchValue) {
      return;
    } else {
      setSearchTerm(searchValue);
    }
  };
  return (
    <section>
      {!isDarkTheme ? (
        <h2 className="title">Discover the World Through Images!</h2>
      ) : (
        <>
          <h2 className="titleDark">Discover the World Through Images!</h2>
        </>
      )}

      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="search"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
