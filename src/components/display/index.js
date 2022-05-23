import css from "./display.module.css";
import { useEffect, useState } from "react";
import EditButton from "../editButton";
import Modal from "../modal";

function Display({ book }) {
  const [editField, setEditField] = useState("Genre");
  //console.log("Displaying: ", book);
  //let editField = "Genre";

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
    const modal = document.getElementById(editField + "Modal");
    console.log("Modal ", modal);
    modal.style.display = "block";
  }

  function windowCloseModal(modal) {
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "modal";
      }
    };
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
          <div className={css.detail}>
            <p className={css.detailTitle}>Name</p>
            <p className="detail">{book.name}</p>
          </div>
          <div className={css.detail}>
            <p className={css.detailTitle}>Author</p>
            <p className="detail">
              {book.author[0].firstname} {book.author[0].lastname}
            </p>
          </div>
          <div className={css.detail}>
            <p className={css.detailTitle}>ISBN</p>
            <p className="detail"> {book.isbn}</p>
          </div>
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
          <div className={css.detail}>
            <p className={css.detailTitle}>Publisher</p>
            <p className="detail">{book.publisher}</p>
          </div>
          <div className={css.detail}>
            <p className={css.detailTitle}>Location</p>
            <p className="detail">{book.publocation}</p>
          </div>
          <div className={css.detail}>
            <p className={css.detailTitle}>Year</p>
            <p className="detail"> {book.pubyear}</p>
          </div>
          <div className={css.detail}>
            <p className={css.detailTitle}>Edition</p>
            <p className="detail">{book.edition}</p>
          </div>
          <div className={css.detail}>
            <p className={css.detailTitle}>Added</p>
            <p className="detail">Insert date automatically</p>
          </div>
        </div>

        <Modal editField={editField} loadedData={book} />

        <div className={css.genre}>
          <EditButton editField="Genre" onEdit={onEdit} />{" "}
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
        <div className={css.keywords}>
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
  );
}

export default Display;
