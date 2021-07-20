// Import ONLY the components here
import Container from "./components/Container";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import OurProducts from "./components/OurProducts";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Carousel />
        <OurProducts />
      </Container>
    </div>
  );
}

export default App;
