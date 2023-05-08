function App() {
  return <AwesomeComponent value="Hello World" />;
}
function AwesomeComponent({ value }) {
  return (
    <div>
      <FirstComponent value={value} />
      <SecondComponent value={value} />
      <ThirdComponent value={value} />
    </div>
  );
}
function FirstComponent({ value }) {
  return <div>First Component says: "{value}"</div>;
}
function SecondComponent({ value }) {
  return <div>Second Component says: "{value}"</div>;
}
function ThirdComponent({ value }) {
  return <div>Third Component says: "{value}"</div>;
}
export default App;
