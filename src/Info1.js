import { useReducer } from "react";

function reducer(state, action) {
  //action = e.target
  return {
    ...state, //는 state가 2개 이상일 때 표현
    [action.name]: action.value,
    //첫번째 input박스의 내용을 입력했을 때 [action.name]는 name state를 가리킨다
    //두번째 input박스의 내용을 입력했을 때 [action.name]은 nickname state를 가리킨다
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;
  //name, nickname는 state 변수로 선언한 것이다.

  const onChange = (e) => {
    dispatch(e.target); //reducer 함수가 호출
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b>
          {name}
        </div>
        <div>
          <b>닉네임:</b>
          {nickname}
        </div>
      </div>
    </div>
  );
};
export default Info;
