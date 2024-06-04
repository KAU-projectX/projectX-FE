import React from 'react'
import "../assets/FontAwesome";
import '../styles/layout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header-wrap'>
      <div className ="logo-wrapper" >
        <Link to="/" className="main-link">
        <FontAwesomeIcon
        icon ="file"
        size="sm"
        className="logo-icon-wrapper"
        />
        WORAVEL
        </Link>
      </div>
      <div className = "search-icon-wrapper" >
        <FontAwesomeIcon
        icon ="magnifying-glass"
        size='xl'
        className=""/>
      </div>
    </div>
  )
}


