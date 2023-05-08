import { createContext, useContext } from "react";
const MyContext = createContext();
function App() {
  return (
    <MyContext.Provider value="Hello World">
      <GrandParent />
    </MyContext.Provider>
  );
}
function GrandParent() {
  return <Parent />;
}
function Parent() {
  return <Child />;
}
function Child() {
  return <GrandChild />;
}
function GrandChild() {
  return <Message />;
}
function Message() {
  const value = useContext(MyContext);
  return <div>Received: {value}</div>;
}
export default App;
