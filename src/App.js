import Button from "./Buttom";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => { setCounter((prev) => prev + 1); }
  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  console.log("i run all the time");
  const runOnce = () => { console.log("i run once"); };
  const runOnlyKeyword = () => { 
    if (keyword !== "") console.log("search for", keyword); 
  };

  // 첫번째 Render일 때만 실행하게끔
  useEffect(runOnce, []);
  // 특정 state가 변할 때만 실행하게끔
  useEffect(runOnlyKeyword, [keyword]);
  // 복수 맵핑
  useEffect(() => { console.log("run keyword & counter"); }, [keyword, counter]);

  return (
    <div>
      <input
        onChange={onChange}
        value={keyword}
        type="text"
        placeholder="Search Here"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
