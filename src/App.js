import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Legal from './pages/Legal';
import News from './pages/News';
import Managment from './pages/Management';
import Resources from './pages/Resources';

function App() {
  return (
    <Routes>
      <Route exact path='/home' element = {<Home/>}/>
      <Route exact path='/noutati' element = {<News/>}/>
      <Route exact path='/organizare' element = {<Managment/>}/>
      <Route exact path='/legistlatie' element = {<Legal/>}/>
      <Route exact path='/contact' element = {<Contact/>}/>
      <Route exact path='/resurse' element = {<Resources/>}/>
      <Route path = '*' element = {<Home/>}/>
      <Route exact path='/' element = {<Home/>}/>
    </Routes>

  );
}

export default App;
