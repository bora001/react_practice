import React, { useState } from "react";

import InputPage from "./InputPage";
import InfoPage from "./InfoPage";

function App() {
  const [InputValue, setInputValue] = useState({
    title: "",
    desc: "",
  });
  const [Info, setInfo] = useState([
    { id: 0, title: "title", desc: "desc" },
    {
      id: 1,
      title: "test1",
      desc: "test1",
    },
  ]);

  const [currentId, setcurrentId] = useState(Info.length);

  const { title, desc } = InputValue;

  const onSubmit = (e) => {
    let event = Object.assign({}, e);
    e.preventDefault();
    e.target.reset();
    setInfo([...Info, { id: currentId, ...InputValue }]);
    setcurrentId(currentId + 1);
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputValue({
      ...InputValue,
      [name]: value,
    });
  };

  return (
    <div>
      <InputPage
        title={title}
        desc={desc}
        onSubmit={onSubmit}
        onChange={onChange}
      />
      <hr />
      <InfoPage info={Info} />
    </div>
  );
}

export default App;
