import React from "react";

function InfoPage({
  info,
  ClickInfo,
  InfoDelete,
  InfoModify,
  modifyChange,
  ModifyTitle,
  ModifyDesc,
  unModify,
}) {
  return (
    <div>
      {info &&
        info.map((content, index) => {
          return (
            <div key={index}>
              {content.isModify ? (
                <div className="modify_box">
                  <p className="info_p">{content.id}</p>
                  <input
                    name="title"
                    placeholder="title"
                    value={ModifyTitle}
                    onChange={modifyChange}
                  />
                  <input
                    name="desc"
                    placeholder="desc"
                    value={ModifyDesc}
                    onChange={modifyChange}
                  />
                </div>
              ) : (
                <div onClick={() => ClickInfo(content.id)}>
                  <div
                    className="info_box"
                    style={{
                      backgroundColor: content.isActive
                        ? "rgb(185, 233, 55, 0.4)"
                        : "rgb(185, 233, 55, 0.1)",
                    }}
                  >
                    <p className="info_p">{content.id}</p>
                    <p className="info_p">{content.title}</p>
                    <p className="info_p">{content.desc}</p>
                  </div>
                </div>
              )}
              {content.isActive ? (
                <div className="btn_box">
                  <button onClick={() => InfoModify(content.id)}>Modify</button>
                  <button onClick={() => InfoDelete(content.id)}>Delete</button>
                  <button onClick={unModify}>Cancel</button>
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
