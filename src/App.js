import React, { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Fundamentos from './pages/Fundamentos'
import GotAPI from './pages/GotAPI'
import Home from './pages/Home'

const App = ()=>{
    return <>
      <header>
        header
      </header>
      <main className='page'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/fundamentos" element={<Fundamentos/>}/>
            <Route path="/got" element={<GotAPI/>}/>
          </Routes>
        </BrowserRouter>
      </main>

    <footer>
      footer
    </footer>
    </>

}

export default App