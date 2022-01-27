import React from "react";
import Antonyms from "./Antonyms";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div>
      <div className="meaning p-4">
        <div className="part-of-speech">{props.def.partOfSpeech}</div>
        {props.def.definitions.map(function (definition, index) {
          return (
            <div className="ms-4 my-4" key={index}>
              <li className="definition mb-2">{definition.definition}</li>
              <div className="example mb-4">
                <em>{definition.example}</em>
              </div>
              <div className="mb-3">
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
