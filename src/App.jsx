import Greetings from "./Greetings";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React props</h1>
      <Greetings firstName={"Mario"} lastName={"Gutiérrez"} age={33}>
        <img src="https://picsum.photos/200/300" alt="foto" />
        <img src="https://picsum.photos/200/300" alt="foto" />
        <img src="https://picsum.photos/200/300" alt="foto" />
      </Greetings>
    </div>
  );
}

export default App;
