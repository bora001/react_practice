import React from "react";

function InfoPage({ info }) {
  console.log(info);
  return (
    <div>
      {info &&
        info.map((content, index) => {
          return (
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <p>{content.id}</p>
              <p>{content.title}</p>
              <p>{content.desc}</p>
            </div>
          );
        })}
    </div>
  );
}

export default InfoPage;
