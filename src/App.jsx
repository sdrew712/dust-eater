import axios from "axios";
require("dotenv").config();

const URL = process.env.REACT_APP_URL;

const handleDirection = async (command) => {
  try {
    axios.post(URL, command);
  } catch (err) {
    console.error(err);
  }
};

const App = () => {
  return (
    <>
      <h1>Dust Eater</h1>

      <button id="forward" onClick={({ target }) => handleDirection(target.innerHTML)}>
        forward
      </button>

      <div className="buttons">
        <button id="left" onClick={({ target }) => handleDirection(target.innerHTML)}>
          left
        </button>
        <button id="stop" onClick={({ target }) => handleDirection(target.innerHTML)}>
          stop
        </button>
        <button id="right" onClick={({ target }) => handleDirection(target.innerHTML)}>
          right
        </button>
      </div>

      <button id="back" onClick={({ target }) => handleDirection(target.innerHTML)}>
        back
      </button>
    </>
  );
};

export default App;
