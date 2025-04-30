export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

  // Dice face dots configuration
  const getDiceFace = (value) => {
    const dotPositions = {
      1: ["center"],
      2: ["top-left", "bottom-right"],
      3: ["top-left", "center", "bottom-right"],
      4: ["top-left", "top-right", "bottom-left", "bottom-right"],
      5: ["top-left", "top-right", "center", "bottom-left", "bottom-right"],
      6: [
        "top-left",
        "top-right",
        "middle-left",
        "middle-right",
        "bottom-left",
        "bottom-right",
      ],
    };

    return (
      dotPositions[value]?.map((pos) => (
        <span key={pos} className={`dot ${pos}`}></span>
      )) || value
    );
  };

  return (
    <button
      className="die-face"
      style={styles}
      onClick={props.hold}
      aria-pressed={props.isHeld}
      aria-label={`Die with value ${props.value}, 
            ${props.isHeld ? "held" : "not held"}`}
    >
      {getDiceFace(props.value)}
    </button>
  );
}
