export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

  return (
    <button
      className="die-face"
      style={styles}
      onClick={props.hold}
      aria-pressed={props.isHeld}
      aria-label={`Die with value ${props.value}, ${
        props.isHeld ? "held" : "not held"
      }`}
      data-value={props.value}
    >
      {Array.from({ length: props.value }).map((_, i) => (
        <span key={i} className="dot" />
      ))}
    </button>
  );
}
