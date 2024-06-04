import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/layout.css'
import "../assets/FontAwesome";
import { useLocation } from 'react-router-dom';

export default function Footer() {

    const location = useLocation();

    const [activeNav, setActiveNav] = useState(1);

    useEffect (()=> {
        if (location.pathname === '/travel') setActiveNav(2);
        else if (location.pathname ==='/community') setActiveNav(3);
        else if (location.pathname ==="/calendar") setActiveNav(4);
        else if (location.pathname ==="/mypage") setActiveNav(5);
        else setActiveNav(1);
    },[location])


    
  return (
    <div className ='footer-wrap'>
        <Link to="/" className="nav-link" onClick={() => setActiveNav(1)}> 
            <div>
                <FontAwesomeIcon
                icon ="laptop"
                className={activeNav === 1 ? "nav-item active" : "nav-item"}/>
            </div>
        </Link>
        <Link to = "/travel" className ="nav-link" onClick={() => setActiveNav(2)}>
            <div>
                <FontAwesomeIcon 
                icon="suitcase"
                className={activeNav === 2 ? "nav-item active" : "nav-item"}/>
                </div>
        </Link>
        <Link to = "/community" className ="nav-link" onClick={() => setActiveNav(3)}>
            <div>
                <FontAwesomeIcon
                icon = "comments"
                className={activeNav === 3 ? "nav-item active" : "nav-item"}/>
            </div>
        </Link>
        <Link to = "/calendar" className ="nav-link" onClick={() => setActiveNav(4)}>
            <div>
                <FontAwesomeIcon 
                icon="calendar"
                className={activeNav === 4 ? "nav-item active" : "nav-item"}/>  
            </div>
        </Link>
        <Link to = "/mypage" className ="nav-link" onClick={() => setActiveNav(5)}>
            <div>
                <FontAwesomeIcon 
                icon="user"
                className={activeNav === 5 ? "nav-item active" : "nav-item"}/>
            </div>
        </Link>
    </div>
  )
}
