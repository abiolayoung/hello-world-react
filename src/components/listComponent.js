import React from "react";
import abiola from "./abiola.jpeg";

const data = [
  {
    image: <img src={abiola} />,
    name: "Oka Gideon",
    department: "Graphics/Motion Designer",
  },
  {
    image: <img src={abiola} />,
    name: "Bisola Ali",
    department: "Content Creator",
  },
  {
    image: <img src={abiola} />,
    name: "Chino Onyeka",
    department: "UI/UX Designer",
  },
];

const dataItem = data.map((list) => {
  return (
    <div>
      {list.image}
      <h3>{list.name}</h3>
      <p>{list.department}</p>
    </div>
  );
});

export default dataItem;
