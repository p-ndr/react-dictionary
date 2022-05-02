export default function DeveloperInfo() {
  return (
    <div className="row mt-5 mb-4 monospace op-8 font-13">
      <div className="col-6">
        <a
          href="https://github.com/parnian-naderi/react-dictionary"
          target="_blank"
          rel="noopener noreferrer"
          className="links"
        >
          Open-source project
        </a>{" "}
        by{" "}
        <a
          href="https://parnian.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="links"
        >
          Parnian Naderi
        </a>
      </div>
      <div className="col-6">
        Illustrations by{" "}
        <a
          href="https://undraw.co/illustrations"
          target="_blank"
          rel="noopener noreferrer"
          className="links"
        >
          undraw
        </a>
      </div>
    </div>
  );
}
