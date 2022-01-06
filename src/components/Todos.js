import React from "react";

const btn = {
  color: "white",
  backgroundColor: "green",
  height: "30px",
  width: "20%",
  marginLeft: "5px",
  fontSize: "16px",
  fontWeight: "bold"
};

function Todos() {
  return (
    <div style={{paddingBottom:"4%", textAlign: "center"}}>
      <h3 style={{marginTop: "2%", marginBottom: "2%"}}>Add Todo</h3>
      <input type="text" style={{ width: "60%", height: "30px" }} />
      <button style={btn}>Submit</button>
    </div>
  );
}

export default Todos;
