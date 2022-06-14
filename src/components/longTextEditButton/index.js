import React from "react";
import css from "./longTextEditButton.module.css";

function LongTextEditButton({ editField, onEdit, loadedData }) {
  const data = loadedData ? loadedData : "";
  let lowerCaseField = editField ? editField.toLowerCase() : "";
  switch (lowerCaseField) {
    case "year":
      lowerCaseField = "pubyear";
      break;
    case "location":
      lowerCaseField = "publocation";
      break;
    default:
      break;
  }

  return (
    <div className={css.description}>
      {loadedData ? (
        <div
          onClick={() => {
            onEdit(lowerCaseField);
          }}
        >
          <p className="detail">{data[lowerCaseField]}</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default LongTextEditButton;
