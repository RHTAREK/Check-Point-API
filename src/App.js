import './App.css';
import UserList from './UserList';
import {useState} from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import User  from "./User";
import NB from './NB';
function App() {
  const [listOfUSer, setListOfUSer] = useState([])
  return (
    <Router>
    <div className="App">
<Route exact path='/' ><NB/>
  <UserList listOfUSer={listOfUSer} setListOfUSer={setListOfUSer}/></Route> 
<Route path='/user/:id' render={(props)=> <User listOfUSer={listOfUSer} {...props}/>}/>
    </div>
    </Router>
  );
}

export default App;
