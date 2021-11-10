import axios from "axios";
require("dotenv").config();

const URL = process.env.REACT_APP_URL;

const handleDirection = async (command) => {
  console.log(command);
  try {
    axios.post(URL, command);
  } catch (err) {
    console.error(err);
  }
};

function App() {
  return (
    <div className="App">
      <button onClick={({ target }) => handleDirection(target.innerHTML)}>forward</button>
      <button onClick={({ target }) => handleDirection(target.innerHTML)}>back</button>
      <button onClick={({ target }) => handleDirection(target.innerHTML)}>right</button>
      <button onClick={({ target }) => handleDirection(target.innerHTML)}>left</button>
      <button onClick={({ target }) => handleDirection(target.innerHTML)}>stop</button>
    </div>
  );
}

export default App;
