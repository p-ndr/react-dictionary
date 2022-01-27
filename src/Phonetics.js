export default function Phonetics(props) {
  return (
    <div>
      <div className="phonetics text-left p-4 d-flex flex-column">
        {props.data.map((phonetic, index) => {
          if ("audio" in phonetic) {
            return (
              <div>
                <div key={index} className="p-2">
                  <button
                    className="audio-button"
                    onClick={() => {
                      var sound = new Audio(phonetic.audio);
                      sound.play();
                    }}
                  >
                    <i className="fas fa-volume-up"></i>
                  </button>
                  &emsp;
                  <span className="phonetics-text">/{phonetic.text}/</span>
                </div>
              </div>
            );
          } else {
            return (
              <div>
                <div key={index} className="p-2">
                  <button className="audio-button">
                    <i className="fas fa-volume-mute"></i>
                  </button>
                  &emsp;
                  <span className="phonetics-text">/{phonetic.text}/</span>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
