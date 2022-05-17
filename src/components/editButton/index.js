import React from "react";
import css from "./editButton.module.css";

function EditButton({ editField, onEdit }) {
  return (
    <div className={css.button}>
      <button
        className="desc"
        onClick={() => {
          onEdit(editField);
        }}
      >
        {editField} +
      </button>
    </div>
  );
}

export default EditButton;
