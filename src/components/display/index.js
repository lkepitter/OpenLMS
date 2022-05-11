import css from "./display.module.css";
import { useEffect, useState } from "react";

function Display({ book }) {
  //console.log("Displaying: ", book);

  return (
    <div className={"display"}>
      <div className={css.display}>
        <div className={css.image}>
          <img
            src={book.image}
            alt={book.name + "image"}
            className={css.image}
          ></img>
          {/* <div id="nameModal" className={css.modal}>
            <div className={css.modalContent}>
              <span className={css.modalClose}>&times;</span>
              <input
                placeholder={character.name}
                value={newName}
                onChange={onNameInput}
              ></input>
              <button
                onClick={() => {
                  if (newName !== "") {
                    onEdit("name", newName);
                    setNewName("");
                    const modal = document.getElementById("nameModal");
                    modal.style.display = "none";
                  } else {
                    onEdit("name", "Nameless One");
                    setNewName("Nameless One");
                    const modal = document.getElementById("nameModal");
                    modal.style.display = "none";
                  }
                }}
              >
                Confirm
              </button>
            </div> */}
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

        <div className={css.genre}>
          <button className="desc">Genres +</button>
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
          <button className="desc">Categories +</button>
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
          <button className="desc">Keywords/Tags +</button>
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
