import React from "react";
import css from "./modal.module.css";
import * as allData from "../../data/bookFields.js";
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

  let addToField = loadedData[editField] ? [...loadedData[editField]] : []; //This is a temporary variable for field editing. Will need state later.
  console.log("addToField:", addToField);
  function removeFrom(state, toRemove) {
    state = [
      ...state.slice(0, state.indexOf(toRemove - 1)),
      ...state.slice(state.indexOf(toRemove + 1)),
    ];
    console.log("State is now: ", state);
    console.log("index: ", state.indexOf(toRemove));
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
          <br></br>
          <br></br>
          {loadedData[editField]
            ? loadedData[editField].map((item) => {
                return (
                  <div
                    className={css.fieldItem}
                    onClick={() => {
                      removeFrom(addToField, item);
                      console.log(
                        `Removed ${item} from ${editField}`
                      ); /*click me to remove data from update state.*/
                    }}
                  >
                    <div key={item}>{item}</div>
                  </div>
                );
              })
            : ""}
        </div>
        <div className={css.add}>
          Click on a {fieldSingular} from the list below to add it to the
          current book.
          <br></br>
          <br></br>
          {allData[editField]
            ? allData[editField].map((item) => {
                return (
                  <div
                    className={css.fieldItem}
                    onClick={() => {
                      console.log(
                        `Added ${item} to ${editField}`
                      ); /*click me to add data to update state.*/
                    }}
                  >
                    <div key={item}>{item}</div>
                  </div>
                );
              })
            : ""}
          {allData[editField] && editField === "genre"
            ? allData["subGenre"].map((item) => {
                return (
                  <div
                    className={css.fieldItem}
                    onClick={() => {
                      console.log(
                        `Added ${item} to ${editField}`
                      ); /*click me to add data to update state.*/
                    }}
                  >
                    <div key={item}>{item}</div>
                  </div>
                );
              })
            : ""}
        </div>
        <div className={css.currentFoot}>
          <button
            onClick={() => {
              /*Update book data with update state when confirm clicked.*/
            }}
          >
            Confirm
          </button>
          <button
            onClick={() => {
              /*Reset update field state.*/
            }}
          >
            Cancel
          </button>
        </div>
        <div className={css.addFoot}>
          <button>Create New</button>
        </div>
      </div>
    </div>
  );
}
export default Modal;
