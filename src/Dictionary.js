import { useEffect, useState } from "react";
import axios from "axios";
import Results from "./Results";
import logo from "./search_logo.svg";

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [result, setResult] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then((response) => {
      setResult(response.data);
      setIsDataLoaded(true);
    });
    //alert(word);
  }

  useEffect(() => {
    setIsDataLoaded(false);
  }, [word]);

  function updateWord(event) {
    setWord(event.target.value);
  }
  // load a 'word of the day' before search, as homepage!
  if (!isDataLoaded) {
    return (
      <div className="dict-body mt-5">
        <form onSubmit={handleSubmit}>
          <div className="row d-flex justify-content-center">
            <div className="col-7 d-none d-lg-block">
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
            <div className="col-1 d-none d-md-block d-lg-none">
              <input
                type="submit"
                value="Search"
                className="search-button-md"
              />
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
              <input
                type="submit"
                value="Search"
                className="search-button-sm"
              />
            </div>
          </div>
        </form>
        <div className="wait-block mb-5">
          <figure>
            <img
              src={logo}
              alt="Searching..."
              className="col-4 mx-auto img-fluid mt-5"
            />
            <figcaption className="monospace mt-3 op-8 mb-5">
              Waiting for word submission...
            </figcaption>
          </figure>
        </div>
      </div>
    );
  } else {
    return (
      <div className="dict-body mt-5">
        <form onSubmit={handleSubmit}>
          <div className="row d-flex justify-content-center">
            <div className="col-7 d-none d-lg-block">
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
              <input
                type="submit"
                value="Search"
                className="search-button-md"
              />
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
              <input
                type="submit"
                value="Search"
                className="search-button-sm"
              />
            </div>
          </div>
        </form>
        <div className="row my-5">
          <Results data={result} />
        </div>
      </div>
    );
  }
}
