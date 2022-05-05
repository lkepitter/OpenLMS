import "./App.css";
import Display from "./components/display";
import { books } from "./data/books";

function App() {
  return (
    <div className="App">
      <Display book={books[0]} />
    </div>
  );
}

export default App;
