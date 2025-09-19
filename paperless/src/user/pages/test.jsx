import React from "react";
import { useAppContext } from "../../context/appcontext";
function Test() {
  const { addedDocuments } = useAppContext();
  return (
    <div>
      {addedDocuments.map((item) => {
        return (
          <div>
            <p>{item.title}</p>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Test;
