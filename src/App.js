import "./App.css";
import FlipCard from "./MyComponents/FlipCard";
import NavBar from "./MyComponents/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <FlipCard
          element="Hydrogen"
          atomicNumber="1"
          molecularStructure="H2"
          properties="Lightest element, highly flammable"
        />

        <FlipCard
          element="Oxygen"
          atomicNumber="8"
          molecularStructure="O2"
          properties="Vital for respiration, supports combustion"
        />
      </div>
    </>
  );
}

export default App;
