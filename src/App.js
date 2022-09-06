import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import View from './Pages/Books/View';
import AddBook from "./Pages/Books/AddBook";
import Edit from './Pages/Books/Edit';

function App() {
  return (
    <Router>
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/books/:id" element={ <View />}/>
        <Route path="/add-books" element={ <AddBook />}/>
        <Route path="/edit-books/:id" element={ <Edit />}/>
      </Routes>
    
    
    </div>
    </Router>
  );
}

export default App;
