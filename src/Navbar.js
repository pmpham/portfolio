import "./Navbar.css"
import React from 'react'
import { Link } from "react-scroll"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <h2 className='navbar_name'>
            peter pham
        </h2>
      </div>

      <ul className="navbar_links">
        <li>
        <Link to ="page2" className="about_link">
          about
        </Link>
        </li>
        <li>
        <Link to ="page3" className="experience_link">
          experience
        </Link>
        </li>
        <li>
        <Link to ="page4" className="projects_link">
          projects
        </Link>
        </li>
        <li>
        <Link to ="page5" className="projects_resume">
          resume
        </Link>
        </li>
      </ul>
    </nav>
    
  )
}

export default Navbar