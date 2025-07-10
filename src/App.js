import logo from "./logo.svg";
import "./App.css";
import JWTEditor from "./Components/JWTEditor";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
        <Navbar />
      <div className="flex w-full justify-center items-center bg-gray-900 p-4">
        <div className="w-[80%]">
          <JWTEditor />
        </div>
      </div>
    </div>
  );
}

export default App;
