import React from "react";
import { useAppContext } from "../../context/appcontext";
function Test() {
  const { addedDocuments } = useAppContext();
  return (
    <div>
      {addedDocuments.map((item, key) => {
        return (
          <div key={key}>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>{item.file}</p>
            <p>{item.date}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Test;
