import React from "react";
import css from "./modal.module.css";

function Modal({ editField }) {
  function closeModal() {
    const modal = document.getElementById(editField + "Modal");
    //console.log(modal);
    const span = document.getElementsByClassName(css.modalClose)[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };
  }

  window.onclick = function (event) {
    console.log("Window clicked");
    const modal = document.getElementById(editField + "Modal");
    if (event.target === modal) {
      modal.style.display = "modal";
    }
  };

  return (
    <div id={`${editField}Modal`} className={css.modal} display="block">
      <div className={css.modalContent}>
        <span className={css.modalClose} onClick={() => closeModal()}>
          &times;
        </span>
        Hello! I am {editField}
      </div>
    </div>
  );
}
export default Modal;
