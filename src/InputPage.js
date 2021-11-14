import React from "react";

function InputPage({ onSubmit, onChange, title, desc }) {
  return (
    <div>
      <form
        onSubmit={onSubmit}
        style={{ display: "flex", flexDirection: "column", width: "200px" }}
      >
        <input
          name="title"
          placeholder="title"
          onChange={onChange}
          value={title}
        />

        <input
          name="desc"
          placeholder="desc"
          onChange={onChange}
          value={desc}
        />
        <button onSubmit={onSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default InputPage;
