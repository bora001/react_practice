import React from "react";

function InfoPage({ info }) {
  console.log(info);
  return (
    <div>
      {info &&
        info.map((content, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-around",
                textAlign: "center",
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
          );
        })}
    </div>
  );
}

export default InfoPage;
