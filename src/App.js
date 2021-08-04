import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Header from './components/header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
     <>
     <Router>
           <Navbar />
           <Header />
        <Switch>
          <Route path="/" exact />
        </Switch>
     </ Router >
     </>   
      
    
  );
}

export default App;
