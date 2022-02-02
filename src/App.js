import React, { useContext, useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Fundamentos from './pages/Fundamentos'
import GotAPI from './pages/GotAPI'
import Home from './pages/Home'
import Home2 from './pages/Home2'
import { themeContext } from './context/ThemeContext'
import Login from './pages/Login'
import LoginState from './pages/LoginState'

const App = ()=>{
    const {theme,changeTheme} = useContext(themeContext)

    return <div className={theme?'main__dark':'main__light'}>
      <header>
        header
      </header>
      <main className={`page`}>
        <button onClick={()=>{changeTheme()}}>Claro/Oscuro</button>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/loginstate" element={<LoginState/>}/>
            <Route path="/home2" element={<Home2/>}/>
            <Route path="/fundamentos" element={<Fundamentos/>}/>
            <Route path="/got" element={<GotAPI/>}/>
          </Routes>
        </BrowserRouter>
      </main>

    <footer>
      footer
    </footer>
    </div>

}

export default App