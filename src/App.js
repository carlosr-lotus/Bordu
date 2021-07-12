// Import ONLY the components here
import Container from "./components/Container";
import Header from "./components/Header";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Carousel />
      </Container>
    </div>
  );
}

export default App;
