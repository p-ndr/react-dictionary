export default function Photos(props) {
  return (
    <div className="row">
      <div className="photos">
        {props.data.map((photo, index) => {
          return (
            <div className="col-2" key={index}>
              <img src={photo.url} alt="result" className="img-fluid" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
