import React, { useState, useMemo } from "react";
import "./App.css";
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
    { id: 1, title: "title", desc: "desc", isActive: false, isModify: false },
    {
      id: 2,
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
    return Info.length;
  }

  const count = useMemo(() => countArticle(Info), [Info]);

  const onCreate = (e) => {
    e.preventDefault();
    setCreate(!Create);
  };

  const onSubmit = (e) => {
    let currentId = Info.length;
    e.preventDefault();
    setInfo([...Info, { id: currentId + 1, ...InputValue, isActive: false }]);
    setInputValue({
      title: "",
      desc: "",
    });
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
    let newArr = newInfo.map((info, index) => ({ ...info, ["id"]: index + 1 }));
    setInfo(newArr);
  };

  const InfoModify = (id) => {
    let Id = id - 1;
    if (Info[Id].isModify) {
      // already modify
      setInfo(
        Info.map((info) =>
          info.id == id ? { ...ModifyValue, id } : { ...info }
        )
      );
      setModifyValue({
        title: "",
        desc: "",
      });
      // setInfo({ title: "", desc: "" });
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
    <div className="app_cnt">
      <div className="app_inner">
        {Create && Create ? (
          <InputPage
            title={title}
            desc={desc}
            onSubmit={onSubmit}
            onChange={onChange}
            onCreate={onCreate}
          />
        ) : (
          <div className="intro_box">
            <h2>Welcome! Make your article here</h2>
            <button onClick={onCreate}>Create</button>
          </div>
        )}
        <p>current article : {count}</p>

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
    </div>
  );
}

export default App;
