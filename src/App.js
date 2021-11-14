import React, { useState, useMemo } from "react";

import InputPage from "./InputPage";
import InfoPage from "./InfoPage";

function App() {
  const [Create, setCreate] = useState(false);
  const [InputValue, setInputValue] = useState({
    title: "",
    desc: "",
  });

  const [ModifyValue, setModifyValue] = useState({
    title: "",
    desc: "",
  });

  const [Info, setInfo] = useState([
    { id: 0, title: "title", desc: "desc", isActive: false, isModify: false },
    {
      id: 1,
      title: "test1",
      desc: "test1",
      isActive: false,
      isModify: false,
    },
  ]);

  const { title, desc } = InputValue;
  const { ModifyTitle, ModifyDesc } = ModifyValue;

  function countArticle(Info) {
    console.log("count articles....");
    return Info.length - 1;
  }

  const count = useMemo(() => countArticle(Info), [Info]);

  const onCreate = (e) => {
    e.preventDefault();
    setCreate(!Create);
  };

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

  const modifyChange = (e) => {
    const targetValue = e.target.value;
    const targetName = e.target.name;
    setModifyValue({
      ...ModifyValue,
      [targetName]: targetValue,
    });
  };

  const ClickInfo = (id) => {
    setInfo(
      Info.map((info) =>
        info.id == id
          ? { ...info, isActive: true, isModify: false }
          : { ...info, isActive: false, isModify: false }
      )
    );
  };

  const InfoDelete = (id) => {
    let newInfo = Info.filter((info) => info.id !== id);
    let newArr = newInfo.map((info, index) => ({ ...info, ["id"]: index }));
    setInfo(newArr);
  };

  const InfoModify = (id) => {
    if (Info[id].isModify) {
      // already modify
      setInfo(
        Info.map((info) =>
          info.id == id ? { ...ModifyValue, id } : { ...info }
        )
      );
    } else {
      //first modify
      setInfo(
        Info.map((info) =>
          info.id == id
            ? { ...info, isModify: true }
            : { ...info, isModify: false }
        )
      );
    }
  };

  return (
    <div>
      {Create && Create ? (
        <InputPage
          title={title}
          desc={desc}
          onSubmit={onSubmit}
          onChange={onChange}
          onCreate={onCreate}
        />
      ) : (
        <button onClick={onCreate}>Create Article</button>
      )}
      <div>
        <p>current Article : {count}</p>
      </div>

      <hr />
      <InfoPage
        info={Info}
        ModifyTitle={ModifyTitle}
        ModifyDesc={ModifyDesc}
        ClickInfo={ClickInfo}
        InfoModify={InfoModify}
        InfoDelete={InfoDelete}
        modifyChange={modifyChange}
      />
    </div>
  );
}

export default App;
