import Container from "./components/Container";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import MakeupShopPage from "./pages/MakeupShop";
import MakeupProductPage from "./pages/MakeupShop/MakeupProduct";
import FragranceShopPage from "./pages/FragranceShop";
import CareerPage from "./pages/Careers";

import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Container>
        <Header />

        <Switch>
          <Route path="/" exact component={Homepage}/>
          <Route path="/fragrance" component={FragranceShopPage} />

          <Route path="/makeup" exact component={MakeupShopPage} />
          {/* The page below is to the render the component with the id from the product choosen */}
          <Route path="/makeup/product" component={MakeupProductPage}/>

          <Route path="/careers" component={CareerPage} />
        </Switch>
        
      </Container>
    </div>
  );
}

export default App;
