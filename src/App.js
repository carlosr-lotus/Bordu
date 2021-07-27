import Container from "./components/Container";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";

import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Container>
        <Header />

        <Switch>
          <Route path="/" exact component={Homepage}/>
        </Switch>
        
      </Container>
    </div>
  );
}

export default App;
