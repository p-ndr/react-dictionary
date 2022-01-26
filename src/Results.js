import Meaning from "./Meaning";

export default function Results(props) {
  const meanings = props.data[0]["meanings"];
  //const phonetics = props.data[0]["phonetics"]
  //const origin = props.data[0]["origin"]

  //order: phonetics definition origin
  //console.log(meanings);
  return (
    <div className="container-fluid">
      <div className="results">
        <div className="row">
          <div className="col-6 mx-auto text-left">
            <div className="meanings d-flex flex-column">
              {meanings.map((meaning, index) => {
                return (
                  <div className="py-2">
                    <Meaning def={meaning} key={index} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
