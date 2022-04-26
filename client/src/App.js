import './App.css';

function App() {

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event)
    console.log(event.target[0].value)
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Upload File:
        <input type="file" accept="image/png, image/jpg"/>
        </label>
        <br/>
        <button type={"submit"}>Submit</button>
      </form>
    </div>
  );
}

export default App;
