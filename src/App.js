import React, { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Fundamentos from './pages/Fundamentos'
import GotAPI from './pages/GotAPI'

const App = ()=>{
    return <div>
      <header>
        header
      </header>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Fundamentos/>}/>
        <Route path="/got" element={<GotAPI/>}/>
      </Routes>
    </BrowserRouter>

    <footer>
      footer
    </footer>
    </div>

}

export default App