
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './pages/Home';





function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
