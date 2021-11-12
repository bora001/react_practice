import React, { useState } from "react";

import InputPage from "./InputPage";
import InfoPage from "./InfoPage";

function App() {
  const [InputValue, setInputValue] = useState({
    title: "",
    desc: "",
  });

  const { title, desc } = InputValue;

  const onSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    console.log(InputValue);
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputValue({
      ...InputValue,
      [name]: value,
    });
  };

  const [Info, setInfo] = useState([
    { id: 0, title: "title", desc: "desc" },
    {
      id: 1,
      title: "test1",
      desc: "test1",
    },
  ]);

  return (
    <div>
      <InputPage
        title={title}
        desc={desc}
        onSubmit={onSubmit}
        onChange={onChange}
      />
      <hr />
      <div style={{ display: "flex" }}>
        <p>index</p>
        <p>title</p>
        <p>desc</p>
      </div>
      <InfoPage info={Info} />
    </div>
  );
}

export default App;
