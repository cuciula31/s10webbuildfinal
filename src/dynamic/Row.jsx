import "../css/resources.css"


function Row(props) {
    const text = props.text;
    const borderColor = props.borderColor;
    const textColor = props.textColor;
    return (
      <div className="teacherRow" style={
        {
        display:"flex",
  
        flexFlow:"row",
        borderStyle:"solid none solid none",
        borderWidth :".1px",
        borderColor:borderColor,
        color:textColor,
        width: "80%",
        height:"5vh",
        justifyContent:"center",
        alignItems:"center",
        fontFamily:"system",
        fontSize:"4vh",
        filter: "drop-shadow(0 0 0.75rem"+textColor+")",
      }}>
        {text}
      </div>
    );
  }

  export default Row;