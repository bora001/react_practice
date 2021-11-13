import React, { useState } from "react";

import InputPage from "./InputPage";
import InfoPage from "./InfoPage";

function App() {
  const [InputValue, setInputValue] = useState({
    title: "",
    desc: "",
  });
  const [Info, setInfo] = useState([
    { id: 0, title: "title", desc: "desc", isActive: false },
    {
      id: 1,
      title: "test1",
      desc: "test1",
      isActive: false,
    },
  ]);

  const { title, desc } = InputValue;

  const onSubmit = (e) => {
    // let event = Object.assign({}, e);
    let currentId = Info.length;
    e.preventDefault();
    // e.target.reset();
    setInfo([...Info, { id: currentId, ...InputValue, isActive: false }]);
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputValue({
      ...InputValue,
      [name]: value,
    });
  };

  const ClickInfo = (id) => {
    setInfo(
      Info.map((info) =>
        info.id == id
          ? { ...info, isActive: true }
          : { ...info, isActive: false }
      )
    );
  };

  const InfoDelete = (id) => {
    let newInfo = Info.filter((info) => info.id !== id);
    let newArr = newInfo.map((info, index) => ({ ...info, ["id"]: index }));
    setInfo(newArr);
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
      <InfoPage info={Info} ClickInfo={ClickInfo} InfoDelete={InfoDelete} />
    </div>
  );
}

export default App;
