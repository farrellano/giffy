import React, { useState } from "react";

function SearchForm({ onSubmit }) {
  const [keyword, setKeyword] = useState("");

  const handleChangue = (evt) => {
    setKeyword(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({ keyword });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChangue} type="text" value={keyword} />
    </form>
  );
}

// evita que se renderice en base al cambio de sus props
export default React.memo(SearchForm);
