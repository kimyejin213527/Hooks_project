import React, { useState, useRef } from "react";
const App = () => {
  const [renderer, setRenderer] = useState(0);
  //renderer값이 변경될 때 렌더링이 발생

  const countRef = useRef(0);
  //countRef 값이 변경되어도 렌더링이 발생되지 않는다
  //렌더링이 발생 되어도 값이 유지된다
  //전역변수(클래스변수(정적변수))
  let countVar = 0;
  //countRVaf 값이 변경되어도 렌더링이 발생되지 않는다
  //렌더링이 발생하면 초기화 된다
  //지역변수

  console.log(countRef);
  console.log("렌더링");

  const doRendering = () => {
    setRenderer(renderer + 1);
  };
  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref : ", countRef.current);
  };
  const increaseVar = () => {
    countVar = countVar + 1;
    console.log("var : ", countVar);
  };
  const printResult = () => {
    console.log(`ref : ${countRef.current}, var:
  ${countVar}`);
  };
  return (
    <div>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>
      <button onClick={doRendering}>렌더!!</button>
      <button onClick={increaseCountRef}>Ref증가</button>
      <button onClick={increaseVar}>Var증가</button>
      <button onClick={printResult}>Ref Var 값 출력</button>
    </div>
  );
};
export default App;
