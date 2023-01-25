import { useState } from 'react'
import { Home } from './components/home/Home'
import { NavBar } from './components/nav/NavBar'
import './styles/App.css'

export function App() {
    return (
        <>
            <NavBar />
            <Home />
        </>
        
    )
}
