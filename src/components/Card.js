import React, { useState } from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/todos";

const card = {
  width: "30%",
  height: "200px",
  backgroundColor: "green",
  marginBottom: "5px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"

};

const wrapper = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap"
}

function Card() {
  const [arr, setArr] = useState([]);
  axios.get(baseURL).then((response) => {
    setArr(response.data.slice(0, 9));
  });

  return (
    <div style={wrapper}>
      {arr.map((obj) => {
        return (
            <div style={card}>
              <h3 style={{textAlign: "center", overflow: "hidden"}}>{obj.title}</h3>
            </div>
        );
      })}
    </div>
  );
}

export default Card;
