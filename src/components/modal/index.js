import React from "react";
import css from "./modal.module.css";
import { convertPluralToSingular } from "../../utilities/functions.js";

function Modal({ editField, loadedData }) {
  function closeModal() {
    const modal = document.getElementById(editField + "Modal");
    //console.log(modal);
    const span = document.getElementsByClassName(css.modalClose)[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };
    window.onclick = function (event) {
      console.log("Window clicked");
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  }

  //Convert the editField into a title
  const fieldTitle = [editField[0].toUpperCase(), ...editField.slice(1)];
  //Convert the editField into a singular
  const fieldSingular = convertPluralToSingular(editField);

  return (
    <div id={`${editField}Modal`} className={css.modal} display="block">
      <div className={css.modalContent}>
        <div className={css.modalHead}>
          <span className={css.modalClose} onClick={() => closeModal()}>
            &times;
          </span>
          {fieldTitle}
        </div>
        <div className={css.current}>
          Below are all {editField} associated with this book. Click on one to
          remove it.
          {loadedData[editField]
            ? loadedData[editField].map((item) => {
                return (
                  <div className={css.fieldItem}>
                    <div key={item}>{item}</div>
                  </div>
                );
              })
            : ""}
        </div>
        <div className={css.add}>
          Click on a {fieldSingular} from the list below to add it to the
          current book.
          {/*allData[editField].map*/}
        </div>
        <div className={css.currentFoot}>
          <button>Confirm</button>
          <button>Cancel</button>
        </div>
        <div className={css.addFoot}>
          <button>Create New</button>
        </div>
      </div>
    </div>
  );
}
export default Modal;
