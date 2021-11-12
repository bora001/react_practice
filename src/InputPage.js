import React, { useState } from "react";

function InputPage() {
  const [InputValue, setInputValue] = useState({
    title: "",
    desc: "",
  });

  const { title, desc } = InputValue;

  function onSubmit(e) {
    e.preventDefault();
    e.target.reset();
  }

  function getInputValue(e) {
    const { value, name } = e.target;
    setInputValue({
      ...InputValue,
      [name]: value,
    });
  }

  return (
    <div>
      <form
        onSubmit={onSubmit}
        style={{ display: "flex", flexDirection: "column", width: "200px" }}
      >
        <input
          name="title"
          placeholder="title"
          onChange={getInputValue}
        ></input>

        <input name="desc" placeholder="desc" onChange={getInputValue}></input>
        <button onSubmit={onSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default InputPage;
