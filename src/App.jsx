import Greetings from "./Greetings";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React props</h1>
      <Greetings firstName={"Mario"} lastName={"Gutiérrez"} age={33} />
    </div>
  );
}

export default App;
