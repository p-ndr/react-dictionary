import { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  const [word, setWord] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then((response) => {
      console.log(response);
    });
    //alert(word);
  }
  function updateWord(event) {
    setWord(event.target.value);
  }
  // load a 'word of the day' before search, as homepage!
  return (
    <div className="dict-body mt-5">
      <form onSubmit={handleSubmit}>
        <div className="row d-flex justify-content-center">
          <div className="col-3 d-none d-lg-block">
            <input
              type="text"
              name="search"
              placeholder="Type a word..."
              className="search-bar"
              onChange={updateWord}
            />
          </div>
          <div className="col-1 d-none d-lg-block">
            <input type="submit" value="Search" className="search-button" />
          </div>
          <div className="col-5 d-none d-md-block d-lg-none">
            <input
              type="text"
              name="search"
              placeholder="Type a word..."
              className="search-bar-md"
            />
          </div>
          <div className="col-2 d-none d-md-block d-lg-none">
            <input type="submit" value="Search" className="search-button-md" />
          </div>
          <div className="col-7 d-md-none">
            <input
              type="text"
              name="search"
              placeholder="Type a word..."
              className="search-bar-sm"
            />
          </div>
          <div className="col-3 d-md-none">
            <input type="submit" value="Search" className="search-button-sm" />
          </div>
        </div>
      </form>
    </div>
  );
}
