import Header from './components/Header';
import List from './components/List'
import axios from 'axios'
import { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<List />} />
        { /* 
        <Route path='/online' element={<OnlineList />} />
        <Route path='/store' element={<InStoreList />} />
        */}
      </Routes>
    </BrowserRouter>    
    </div>
  )
}

export default App;
