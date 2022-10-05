import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Sign_up from './components/Sign_up';
import Sign_in from './components/Sign_in';
import Diagnostic from './components/Diagnostic';
import { user_context } from '../src/contexts/user_context'


function App() {

  const [name, setName] = React.useState()
  //const name = localStorage.getItem("name")

  return (
    <user_context.Provider value={{name, setName}}>
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Sign_in />}/>
        <Route path='/sign_up' element={<Sign_up />} />
        <Route path='/home' element={<Home />} />
        <Route path='/diagnostic' element={<Diagnostic />} />

      </Routes>
    </BrowserRouter>
    </user_context.Provider>
  );
}

export default App;
