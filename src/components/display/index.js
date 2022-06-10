import css from "./display.module.css";
import { useEffect, useState } from "react";
import EditButton from "../editButton";
import TextEditButton from "../textEditButton";
import Modal from "../modal";
import { books } from "../../data/books";

function Display() {
  const [editField, setEditField] = useState("Genre"); //current field to display for editing
  const [addToField, setAddToField] = useState([]); //list of items to add to the editing field
  const [book, setBook] = useState(books[1]);
  const [modal, setModal] = useState("genreModal");
  const [fieldInput, setFieldInput] = useState("");
  //const book = loadedBook;

  function onEdit(field) {
    switch (field) {
      case "Genre":
        field = "genre";
        break;
      case "Categories":
        field = "categories";
        break;
      case "Keywords/Tags":
        field = "keywords";
        break;
      default:
        break;
    }
    //Take in the field to edit and change the state
    setEditField(field);
    //display relevant modal
    console.log("EditField ", editField);
    setAddToField([...book[field]]);
    const modal = document.getElementById(editField + "Modal");
    console.log("Modal ", modal);
    modal.style.display = "block";
  }

  return (
    <div className={"display"}>
      <div className={css.display}>
        <div className={css.image}>
          <img
            src={book.image}
            alt={book.name + "image"}
            className={css.image}
          ></img>
        </div>

        <div className={css.info}>
          <TextEditButton editField="Name" onEdit={onEdit} loadedData={book} />
          <div className={css.detail}>
            <p className={css.detailTitle}>Author</p>
            <p className="detail">
              {book.author[0].firstname} {book.author[0].lastname}
            </p>
          </div>
          <TextEditButton editField="ISBN" onEdit={onEdit} loadedData={book} />
          <div className={css.detail}>
            <p className={css.detailTitle}>Fiction/Non-fiction</p>
            <p className="detail">{book.fiction ? "Fiction" : "Non-fiction"}</p>
          </div>
          <div className={css.detail}>
            <p className={css.detailTitle}>Series</p>
            <p className="detail">
              {book.series[0].name} #{book.series[0].number}
            </p>
          </div>
        </div>

        <div className={css.info2}>
          <TextEditButton
            editField="Publisher"
            onEdit={onEdit}
            loadedData={book}
          />
          <TextEditButton
            editField="Location"
            onEdit={onEdit}
            loadedData={book}
          />
          <TextEditButton editField="Year" onEdit={onEdit} loadedData={book} />
          <TextEditButton
            editField="Edition"
            onEdit={onEdit}
            loadedData={book}
          />
          <div className={css.detail}>
            <p className={css.detailTitle}>Added</p>
            <p className="detail">Insert date automatically</p>
          </div>
        </div>

        <Modal
          editField={editField}
          loadedData={book}
          book={book}
          setBook={setBook}
          books={books}
          addToField={addToField}
          setAddToField={setAddToField}
          fieldInput={fieldInput}
          setFieldInput={setFieldInput}
        />

        <div className={css.genre}>
          <EditButton editField="Genre" onEdit={onEdit} />{" "}
          <div className={css.list}>
            {book.genre
              ? book.genre.map((item, index) => {
                  return (
                    <div key={index + 1}>
                      <p>{item}</p>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>

        <div className={css.description}>
          <p className="desc">{book.description}</p>
          <p className="detailButtons"></p>
        </div>

        <div className={css.copies}>
          <div className={css.copyRow}>
            <p className={css.detail}>Copy Barcode</p>{" "}
            <p className={css.detail}>Availability</p>{" "}
            <p className={css.detail}>Status</p>{" "}
            <p className={css.detail}>Due Date</p>
            <p className={css.detail}>Location</p>{" "}
            <p className={css.detail}>Value</p>{" "}
            <p className={css.detail}>Purchase Date</p>
          </div>
          {book.copies
            ? book.copies.map((item, index) => {
                return (
                  <div key={index + 1} className={css.copyRow}>
                    <div className={css.detail}>
                      <p>{item.barcode}</p>
                    </div>
                    <div className={css.detail}>
                      <p>{item.available ? "Available" : "Unavailable"}</p>
                    </div>
                    <div className={css.detail}>
                      <p>{item.status}</p>
                    </div>
                    <div className={css.detail}>
                      <p>{item.dueDate}</p>
                    </div>
                    <div className={css.detail}>
                      <p>{item.location}</p>
                    </div>
                    <div className={css.detail}>
                      <p>{item.value}</p>
                    </div>
                    <div className={css.detail}>
                      <p>{item.purDate}</p>
                    </div>
                  </div>
                );
              })
            : ""}
          <p className="detailButtons"></p>
        </div>
        <div className={css.category}>
          <EditButton editField="Categories" onEdit={onEdit} />
          <div className={css.list}>
            {book.genre
              ? book.categories.map((item, index) => {
                  return (
                    <div key={index + 1}>
                      <p>{item}</p>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
        <div className={css.keywords}>
          <div className={css.list}>
            <EditButton editField="Keywords/Tags" onEdit={onEdit} />
            {book.genre
              ? book.keywords.map((item, index) => {
                  return (
                    <div key={index + 1}>
                      <p>{item}</p>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Display;
