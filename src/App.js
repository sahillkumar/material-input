import "./App.css";
import InputBox from "./InputBox";

function App() {
  return (
    <div className="App">
      <InputBox placeholder="First Name" className="primary" />
      <InputBox placeholder="Middle Name" className="filled" />
      <InputBox placeholder="Last Name" className="empty" />
    </div>
  );
}

export default App;
