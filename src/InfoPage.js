import React from "react";

function InfoPage({
  info,
  ClickInfo,
  InfoDelete,
  InfoModify,
  modifyChange,
  ModifyTitle,
  ModifyDesc,
}) {
  return (
    <div>
      {info &&
        info.map((content, index) => {
          return (
            <div>
              {content.isModify ? (
                <div
                  key={`modify` + `${index}`}
                  className="modify_box"
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    textAlign: "center",
                    backgroundColor: "gray",
                    width: "100%",
                    height: "auto",
                  }}
                >
                  <p
                    style={{
                      width: "30%",
                      height: "100%",
                      border: "1px solid blue",
                    }}
                  >
                    {content.id}
                  </p>
                  <input
                    name="title"
                    placeholder="title"
                    value={ModifyTitle}
                    onChange={modifyChange}
                    style={{ width: "28%", height: "50%" }}
                  />
                  <input
                    name="desc"
                    placeholder="desc"
                    value={ModifyDesc}
                    onChange={modifyChange}
                    style={{ width: "28%", height: "50%" }}
                  />
                </div>
              ) : (
                <div key={index} onClick={() => ClickInfo(content.id)}>
                  <div
                    className="info_box"
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      textAlign: "center",
                      backgroundColor: content.isActive ? "gold" : "white",
                      border: "2px solid red",
                      width: "100%",
                      height: "auto",
                    }}
                  >
                    <p
                      style={{
                        width: "30%",
                        height: "100%",
                        border: "1px solid blue",
                      }}
                    >
                      {content.id}
                    </p>
                    <p
                      style={{
                        width: "30%",
                        height: "100%",
                        border: "1px solid blue",
                      }}
                    >
                      {content.title}
                    </p>
                    <p
                      style={{
                        width: "30%",
                        height: "100%",
                        border: "1px solid blue",
                      }}
                    >
                      {content.desc}
                    </p>
                  </div>
                </div>
              )}
              {content.isActive ? (
                <div
                  className="btn_box"
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    margin: "20px auto",
                    width: "20%",
                  }}
                >
                  <button onClick={() => InfoModify(content.id)}>Modify</button>
                  <button onClick={() => InfoDelete(content.id)}>Delete</button>
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
    </div>
  );
}

export default InfoPage;
