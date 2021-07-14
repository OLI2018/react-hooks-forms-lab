import React from "react";

// Filter is a child to ShoppingList 

function Filter({ search, onSearchChange, onCategoryChange }) {

// define function to handle input
// takes event and whatever is inside of that even as an argument after any change 
// passes the actual value typed in the search field to useState in the parent component
  function handleSearchChange(event) {
    // accessing the actual value in the search field & passing to the useSate 
    onSearchChange(event.target.value);
  }

  return (
// create search field 
// define value attribute, add onChange event Listener -> detects any changes in the search field and call handleSearchChange function 
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." value={search} onChange={handleSearchChange}/>

      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
