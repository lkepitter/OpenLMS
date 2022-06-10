import React from "react";
import css from "./textEditButton.module.css";

function TextEditButton({ editField, onEdit, loadedData }) {
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
    <div>
      {loadedData ? (
        <div
          className={css.detail}
          onClick={() => {
            onEdit(lowerCaseField);
          }}
        >
          <p className={css.detailTitle}>{editField}</p>
          <p className="detail">{data[lowerCaseField]}</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default TextEditButton;
