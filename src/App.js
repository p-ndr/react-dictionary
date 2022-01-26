import logo from "./moon_logo.svg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="container-fluid">
      <div className="App">
        <header className="App-header mx-auto mt-5">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <div className="App-name mt-2 mx-auto handwriting">Mond Dictionary</div>
        <div className="intro mt-2 mx-auto monospace">
          Let there be light upon the darkness
        </div>
        <Dictionary />
      </div>
    </div>
  );
}

export default App;
