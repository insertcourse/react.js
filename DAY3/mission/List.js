import React from "react";

const List = () => {
  const items = ["포도", "바나나", "딸기", "오렌지"];

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
