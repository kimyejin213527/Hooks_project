import { createContext, useContext } from "react";
const MyContext = createContext();
function App() {
  return (
    <MyContext.Provider value="Hello World">
      <AwesomeComponent />
    </MyContext.Provider>
  );
}
function AwesomeComponent() {
  return (
    <div>
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
    </div>
  );
}
function FirstComponent() {
  const value = useContext(MyContext);
  return <div>First Component says: {value}</div>;
}
function SecondComponent() {
  const value = useContext(MyContext);
  return <div>Second Component says: {value}</div>;
}
function ThirdComponent() {
  const value = useContext(MyContext);
  return <div>Third Component says: {value}</div>;
}
export default App;
