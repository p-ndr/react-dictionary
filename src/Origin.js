export default function Origin(props) {
  return (
    <div className="origin-box p-4">
      <strong className="origin-title">Origin</strong>
      <br />
      <li className="origin mt-3 ms-3">{props.data}</li>
    </div>
  );
}
