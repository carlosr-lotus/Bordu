import Container from "./components/Container";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import MakeupShopPage from "./pages/MakeupShop";
import MakeupProductPage from "./pages/MakeupShop/MakeupProduct";
import FragranceShopPage from "./pages/FragranceShop";
import FragranceProductPage from "./pages/FragranceShop/FragranceProduct";
import CartPage from "./pages/Cart";
import CareerPage from "./pages/Careers";

import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Container>
        <Header />

        <Switch>
          <Route path="/fragrance" exact component={FragranceShopPage} />
          <Route path="/fragrance/product" component={FragranceProductPage} />

          <Route path="/makeup" exact component={MakeupShopPage} />
          <Route path="/makeup/product" component={MakeupProductPage}/>

          <Route path="/cart" component={CartPage} />

          <Route path="/careers" component={CareerPage} />

          <Route path="/" component={Homepage}/>
        </Switch>
        
      </Container>
    </div>
  );
}

export default App;
