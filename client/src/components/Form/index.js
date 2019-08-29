import React from "react";


// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="book">Search Book</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="book"
          type="text"
          className="form-control"
          placeholder="Type book that you want to find"
          id="book"
        />
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
