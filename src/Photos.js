export default function Photos(props) {
  if (props.data) {
    return (
      <div className="row photos d-flex flex-row justify-content evenly mx-auto">
        {props.data.map((photo, index) => {
          return (
            <div className="col-3 p-4" key={index}>
              <img
                src={photo.src.small}
                alt="result"
                className="img-fluid picture"
              />
            </div>
          );
        })}
      </div>
    );
  }
  return null;
}
