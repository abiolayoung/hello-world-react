import React from "react";

function HandleClick() {
  console.log("congratulations, you've been registered");

  return (
    <div class="buttons">
      <button
        onClick={(event) => {
          console.log("congratulations, you have been registered");
        }}
      >
        Click Me
      </button>
      <button onClick={HandleClick}>Click Me Again</button>
    </div>
  );
}

export default HandleClick;