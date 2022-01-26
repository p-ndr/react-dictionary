export default function Antonyms(props) {
  if (props.data.length !== 0) {
    return (
      <div>
        <strong>Antonyms: </strong>
        <ul className="antonyms d-flex justify-contents-evenly">
          {props.data.map((antonym, index) => {
            if (index < props.data.length - 1) {
              return <li key={index}>{antonym},&ensp;</li>;
            } else {
              return <li key={index}>{antonym}</li>;
            }
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
