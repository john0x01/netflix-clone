import { useState } from 'react'
import { BiSearch, BiBell } from 'react-icons/bi'

import './NavBar.css'

export function NavBar() {
    const [active, setActive] = useState(0)

    return (
        <nav>  
            <div className="nav-left">
                <div className="nav-logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logo"/>
                </div>

                <a href="#" className={active === 0 ? "link-active" : ""} onClick={() => setActive(0)}>
                    Início
                </a>
                <a href="#" className={active === 1 ? "link-active" : ""} onClick={() => setActive(1)}>
                    Séries
                </a>
                <a href="#" className={active === 2 ? "link-active" : ""} onClick={() => setActive(2)}>
                    Filmes
                </a>
                <a href="#" className={active === 3 ? "link-active" : ""} onClick={() => setActive(3)}>
                    Bombando
                </a>
                <a href="#" className={active === 4 ? "link-active" : ""} onClick={() => setActive(4)}>
                    Minha lista
                </a>
                <a href="#" className={active === 5 ? "link-active" : ""} onClick={() => setActive(5)}>
                    Navegar por idiomas
                </a>
            </div>
            <div className="nav-right">
                <div className="search-box">
                    <BiSearch />
                </div>
                <BiBell />
                <div className="user-dropdown">
                    <img src="" alt="" width={24} height={24}/>
                </div>
            </div>
            

        </nav>
    )
}