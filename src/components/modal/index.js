// import React, { useState } from "react";
import css from "./modal.module.css";
import * as allData from "../../data/bookFields.js";
import {
  genre,
  subGenre,
  fictionTag,
  authorTag,
  categories,
  keywords,
  textMultipleChoiceField,
} from "../../data/bookFields.js";
import { convertPluralToSingular } from "../../utilities/functions.js";

function Modal({
  editField,
  loadedData,
  addToField,
  setAddToField,
  book,
  books,
  setBook,
  setFieldInput,
  fieldInput,
}) {
  //function to update books data
  function updateBook(inField, withData) {
    //update the original data
    const bookIndex = books.findIndex(
      (current) => current.refId === book.refId
    );
    console.log("Updating", books[bookIndex][inField], "with", withData);
    books[bookIndex][inField] = withData;
    //change the state to update the display
    setBook(books[bookIndex]);
  }
  console.log(
    "HELLO",
    `${editField} is ${textMultipleChoiceField.includes(editField)} `
  );
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

  function closeModal(buttonId) {
    const modal = document.getElementById(editField + "Modal");
    //const span = document.getElementsByClassName(css.modalClose)[0]
    const button = document.getElementById(buttonId);
    // When the user clicks on <span> (x), click outside modal or click cancel button, close the modal
    // span.onclick = function () {
    //   modal.style.display = "none";
    // };
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

  function onInput(event) {
    setFieldInput(event.target.value);
    console.log("New field entry is: ", event.target.value);
  }

  function confirmInput(input, field) {
    //check it's an appropriate number
    //convert input to a number and check it's not NaN
    if (input === "") {
      return;
    } else {
      console.log([...allData[field], input]);
      allData[field] = [...allData[field], input]; //this doesn't work because of a type error. console log is fine, but setting it this way breaks.
      setFieldInput("");
      //set state to update field list
    }
  }

  //Convert the editField into a title
  const fieldTitle = [editField[0].toUpperCase(), ...editField.slice(1)];
  //Convert the editField into a singular
  const fieldSingular = convertPluralToSingular(editField);
  console.log("THIS", typeof loadedData[editField] === "string");
  return (
    <div id={`${editField}Modal`} className={css.modal} display="block">
      {editField === "description" ? (
        <div className={css.modalContentLongText}>
          {/*Text type edit */}
          <div className={css.modalHead}>
            <span className={css.modalClose} onClick={() => closeModal()}>
              &times;
            </span>
            {fieldTitle}
          </div>
          <textarea
            className={css.textArea}
            placeholder={loadedData[editField]}
            value={fieldInput ? fieldInput : loadedData[editField]}
            onChange={onInput}
          >
            {/* {" "}
            <div key={loadedData[editField]}>{loadedData[editField]}</div> */}
          </textarea>
          <div className={css.currentFoot}>
            <div className={css.addFoot}>
              <button
                id={"modalConfirm"}
                onClick={() => {
                  if (fieldInput !== "") {
                    /*Update book data with update state when confirm clicked.*/
                    books[
                      books.findIndex((current) => current.refId === book.refId)
                    ] = { ...book, [editField]: fieldInput };
                    updateBook(editField, fieldInput);
                  }
                  closeModal("modalConfirm");
                }}
              >
                Confirm
              </button>
              <button
                onClick={() => {
                  setFieldInput("");
                  closeModal("modalCancel");
                }}
                id={"modalCancel"}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : typeof loadedData[editField] === "string" &&
        !textMultipleChoiceField.includes(editField) ? (
        <div className={css.modalContentText}>
          {/*Text type edit */}
          <div className={css.modalHead}>
            <span className={css.modalClose} onClick={() => closeModal()}>
              &times;
            </span>
            {fieldTitle}
          </div>
          <div
            className={css.fieldItemText}
            onClick={() => {
              removeFrom(addToField, "item");
            }}
          >
            {" "}
            <div key={loadedData[editField]}>{loadedData[editField]}</div>
          </div>
          <div className={css.currentFoot}>
            <div className={css.addFoot}>
              <input
                // placeholder={loadedData[editField]}
                value={fieldInput}
                onChange={onInput}
              ></input>
              <button
                id={"modalConfirm"}
                onClick={() => {
                  /*Update book data with update state when confirm clicked.*/
                  books[
                    books.findIndex((current) => current.refId === book.refId)
                  ] = { ...book, [editField]: fieldInput };
                  updateBook(editField, fieldInput);
                  setFieldInput("");
                  closeModal("modalConfirm");
                }}
              >
                Confirm
              </button>
            </div>
            <button
              onClick={() => closeModal("modalCancel")}
              id={"modalCancel"}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : textMultipleChoiceField.includes(editField) ? (
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
            <div
              className={css.fieldItem}
              onClick={() => {
                removeFrom(addToField, loadedData[editField]);
              }}
            >
              <div key={loadedData[editField]}>{loadedData[editField]}</div>
            </div>
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
              id={"modalConfirm"}
              onClick={() => {
                /*Update book data with update state when confirm clicked.*/
                books[
                  books.findIndex((current) => current.refId === book.refId)
                ] = { ...book, [editField]: addToField };
                updateBook(editField, addToField);
                closeModal("modalConfirm");
              }}
            >
              Confirm
            </button>
            <button
              onClick={() => closeModal("modalCancel")}
              id={"modalCancel"}
            >
              Cancel
            </button>
          </div>
          <div className={css.addFoot}>
            <input
              // placeholder={loadedData[editField]}
              value={fieldInput}
              onChange={onInput}
            ></input>
            <button
              onClick={() => {
                confirmInput(fieldInput, editField);
              }}
            >
              Create New
            </button>
          </div>
        </div>
      ) : (
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
              id={"modalConfirm"}
              onClick={() => {
                /*Update book data with update state when confirm clicked.*/
                books[
                  books.findIndex((current) => current.refId === book.refId)
                ] = { ...book, [editField]: addToField };
                updateBook(editField, addToField);
                closeModal("modalConfirm");
              }}
            >
              Confirm
            </button>
            <button
              onClick={() => closeModal("modalCancel")}
              id={"modalCancel"}
            >
              Cancel
            </button>
          </div>
          <div className={css.addFoot}>
            <input
              // placeholder={loadedData[editField]}
              value={fieldInput}
              onChange={onInput}
            ></input>
            <button
              onClick={() => {
                confirmInput(fieldInput, editField);
              }}
            >
              Create New
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Modal;
