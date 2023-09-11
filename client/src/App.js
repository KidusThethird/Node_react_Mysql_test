import "./App.css";
import "./index.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");

  return (
    <div className="flex w-full py-20">
      <div className="mx-auto space-y-5 flex flex-col">
        <div>
          <label htmlFor="">Name:</label>
          <input
            className="border-2 ml-5"
            type="text"
            name=""
            id=""
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="">Age:</label>
          <input
            className="border-2 ml-5"
            type="number"
            name=""
            id=""
            onChange={(event) => {
              setAge(event.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="">Country:</label>
          <input
            className="border-2 ml-5"
            type="text"
            name=""
            id=""
            onChange={(event) => {
              setCountry(event.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="">Position:</label>
          <input
            className="border-2 ml-5"
            type="text"
            name=""
            id=""
            onChange={(event) => {
              setPosition(event.target.value);
            }}
          />
        </div>

        <div>
          <button className="py-1 px-3 bg-gray-200">Add Employee</button>
        </div>
      </div>
    </div>
  );
}

export default App;
