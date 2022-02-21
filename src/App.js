import Home from './home'
import Navbar from './navbar'
import Admins from './admins'
import CatFact from './catfact'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
        
        <Navbar/>
        <switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/admins" component={Admins}></Route>
          <Route path="/catfact" component={CatFact}></Route>
          <Route exact path="/" component={Home}></Route>
        </switch>
       
      </div>
    </BrowserRouter>
  );
}

export default App;
