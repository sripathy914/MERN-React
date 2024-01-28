import React from "react";

const Cars = [1, 2, 3, 4];

function MyComponent() {
  return (
    <ul>
      {Cars.map((val, index) => (
        <li key={index}>{val}</li>
      ))}
    </ul>
  );
}

export default MyComponent;