import React from "react";
import css from "./modal.module.css";

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
      //const modal = document.getElementById(editField + "Modal");
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  }

  return (
    <div id={`${editField}Modal`} className={css.modal} display="block">
      <div className={css.modalContent}>
        <span className={css.modalClose} onClick={() => closeModal()}>
          &times;
        </span>
        Hello! I am {editField}
        <div className={css.current}>
          List the current data for the field here.
          {loadedData[editField]
            ? loadedData[editField].map((item) => {
                return <div key={item}>{item}</div>;
              })
            : ""}
        </div>
        <div className={css.add}>
          List the data that can be added to the field here. (i.e. all possible
          options in the database)
          {/*allData[editField].map*/}
        </div>
        <button>Confirm</button>
        <button>Cancel</button>
        <button>Add New</button>
      </div>
    </div>
  );
}
export default Modal;
