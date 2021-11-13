import React from "react";

function InfoPage({ info, ClickInfo, InfoDelete }) {
  return (
    <div>
      {info &&
        info.map((content, index) => {
          return (
            <div>
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
                  <button>Modify</button>
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
