export default function Antonyms(props) {
  if (props.data.length !== 0) {
    return (
      <div className="mb-3">
        <strong>Antonyms: </strong>
        <ul className="antonyms d-flex justify-contents-evenly">
          {props.data.map((antonym, index) => {
            return <li key={index}>{antonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
