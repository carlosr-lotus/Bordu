import Container from "./components/Container";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import MakeupShopPage from "./pages/MakeupShop";
import CareerPage from "./pages/Careers";

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Container>
        <Header />

        <Switch>
          <Route path="/" exact component={Homepage}/>
          <Route path="/makeup" component={MakeupShopPage} />
          <Route path="/careers" component={CareerPage} />
        </Switch>
        
      </Container>
    </div>
  );
}

export default App;
