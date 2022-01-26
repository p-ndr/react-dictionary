import React from "react";
import Antonyms from "./Antonyms";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.def.definitions[0]);

  return (
    <div>
      <div className="meaning p-3">
        <div className="part-of-speech">{props.def.partOfSpeech}</div>
        {props.def.definitions.map(function (definition, index) {
          return (
            <div className="ms-4 my-4" key={index}>
              {/* <strong>Definition: </strong> */}
              <div className="definition mb-2">- {definition.definition}</div>
              {/* <strong>Example: </strong> */}
              <div className="example mb-2">
                <em>{definition.example}</em>
              </div>
              <div className="ms-3">
                <Synonyms data={definition.synonyms} />
                <Antonyms data={definition.antonyms} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
