export default function Meaning(props) {
  //console.log(props);
  function capAndCorrect(phrase) {
    let endmarks = ["!", "?", "."];
    if (!endmarks.includes(phrase.charAt(phrase.length - 1) + "")) {
      phrase = phrase + ".";
    }
    let s1 = phrase.substring(1, phrase.length);
    let s2 = phrase.charAt(0) + "";
    return s2.toUpperCase() + s1;
  }
  return (
    <div>
      <div className="meaning p-3">
        <div className="part-of-speech">{props.def.partOfSpeech}</div>
        <div className="definition my-4">
          {capAndCorrect(props.def.definitions[0].definition)}
        </div>
        <div className="example">
          <em>{capAndCorrect(props.def.definitions[0].example)}</em>
        </div>
      </div>
    </div>
  );
}
