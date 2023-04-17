import { useReducer } from "react";

function reducer(state, action) {
  //첫번째 action = (type:"INCREMENT")
  //두번째 action - (type:"DECREMENT")
  //action에 의해서 state값을 업데이트 한다.
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  //state는 value이고 0을 저장, dispatch는 reducer 함수를 호출하기 위한 약속
  return (
    <div>
      <p>
        현재 카운터 값은 <b> {state.value} </b> 입니다.
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      {/* dispatch({ type: "INCREMENT" })는 reducer함수를 호출 하는데 인자 값은 { type: "INCREMENT" }을 reducer함수의 type에게 전달한다. */}
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};
export default Counter;
