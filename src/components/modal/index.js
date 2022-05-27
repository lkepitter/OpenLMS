// import React, { useState } from "react";
import css from "./modal.module.css";
import * as allData from "../../data/bookFields.js";
import { convertPluralToSingular } from "../../utilities/functions.js";

function Modal({
  editField,
  loadedData,
  addToField,
  setAddToField,
  updateBook,
}) {
  function closeModal() {
    const modal = document.getElementById(editField + "Modal");
    const span = document.getElementsByClassName(css.modalClose)[0];
    const button = document.getElementById("modalCancel");
    // When the user clicks on <span> (x), click outside modal or click cancel button, close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };
    window.onclick = function (event) {
      console.log("Window clicked");
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
    button.onclick = function () {
      modal.style.display = "none";
    };
  }

  function removeFrom(state, toRemove) {
    console.log("index: ", state.indexOf(toRemove));
    const index = state.indexOf(toRemove);
    console.log(`Removed ${toRemove} from ${editField}`);
    console.log("State is now: ", [
      ...state.slice(0, index),
      ...state.slice(index + 1),
    ]);
    setAddToField([...state.slice(0, index), ...state.slice(index + 1)]);
  }
  function addTo(state, toAdd) {
    //only add if it's nor already on the list
    if (!state.includes(toAdd)) {
      console.log(`Added ${toAdd} to ${editField}`);
      console.log("State is now: ", [...state, toAdd]);
      setAddToField([...state, toAdd]);
    }
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
            ? addToField.map((item) => {
                return (
                  <div
                    className={css.fieldItem}
                    onClick={() => {
                      removeFrom(addToField, item);
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
                      addTo(addToField, item);
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
                      addTo(addToField, item);
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
              updateBook(editField, addToField);
            }}
          >
            Confirm
          </button>
          <button onClick={() => closeModal()} id={"modalCancel"}>
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
