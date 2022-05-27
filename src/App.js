import { useEffect, useState } from "react";
import "./App.css";
import Display from "./components/display";
import { books } from "./data/books";

function App() {
  const [loadedBook, setLoadedBook] = useState(books[1]);
  //function to update books data
  function updateBook(inField, withData) {
    //update the original data
    const bookIndex = books.findIndex(
      (book) => book.refId === loadedBook.refId
    );
    console.log("Updating", books[bookIndex][inField], "with", withData);
    books[bookIndex][inField] = withData;
    //change the state to update the display
    setLoadedBook(books[bookIndex]);
  }

  return (
    <div className="App">
      <Display
        book={loadedBook}
        setLoadedBook={setLoadedBook}
        updateBook={updateBook}
      />
    </div>
  );
}

export default App;
