import { useInput } from "./useInput";
const App = () => {
  const [inputValue, handleChange] = useInput("안녕");
  const handleSubmit = () => {
    alert(inputValue);
    //setInputValue("");
  };
  return (
    <div>
      <h1>useInput</h1>
      <input value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
};
export default App;
