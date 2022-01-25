export default function Dictionary() {
  function handleSubmit(event) {
    event.preventDefault();
    alert(event.target.search.value);
  }
  // load a 'word of the day' before search, as homepage!
  return (
    <div className="dict-body mt-5">
      <form onSubmit={handleSubmit}>
        <div className="row d-flex justify-content-center">
          <div className="col-3">
            <input
              type="text"
              name="search"
              placeholder="Type a word..."
              className="search-bar d-none d-lg-block"
            />
          </div>
          <div className="col-1">
            <input
              type="submit"
              value="Search"
              className="search-button d-none d-lg-block"
            />
          </div>
          {/* <div className="col-3">
            <input
              type="text"
              name="search"
              placeholder="Type a word..."
              className="search-bar-sm d-lg-none d-md-block"
            />
          </div>
          <div className="col-1">
            <input
              type="submit"
              value="Search"
              className="search-button-sm d-lg-none d-md-block"
            />
          </div> */}
        </div>
      </form>
    </div>
  );
}
