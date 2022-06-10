import React from "react";
import css from "./editButton.module.css";

function EditButton({ editField, onEdit }) {
  return (
    <div>
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
    </div>
  );
}

export default EditButton;
