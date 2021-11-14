import React from "react";

function InputPage({ onSubmit, onChange, title, desc, onCreate }) {
  return (
    <div>
      <form className="submit_form" onSubmit={onSubmit}>
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
        <button onClick={onCreate}>Cancel</button>
      </form>
    </div>
  );
}

export default InputPage;
