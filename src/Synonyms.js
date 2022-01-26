export default function Synonyms(props) {
  if (props.data.length !== 0) {
    return (
      <div className="my-2">
        <strong>Synonyms: </strong>
        <ul className="synonyms">
          {props.data.map((synonym, index) => {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
