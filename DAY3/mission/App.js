import React from "react";
import List from "./List";
import "./App.css";

const App = () => {
  const fruits = ["포도", "바나나", "딸기", "오렌지"];

  return (
    <div>
      <h2>내가 좋아하는 과일</h2>
      <List items={fruits} />
    </div>
  );
};

export default App;
