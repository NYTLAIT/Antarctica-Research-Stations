import './Header.css';
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className='Header'>
            <NavLink className='logo' to="/">
                REDSUNDER
            </NavLink>
            <div className='navbar'>
                <NavLink
                    className={({ isActive }) => `nav-link${isActive ? ' nav-link-active' : ''}`}
                    to="/">
                    Explorer</NavLink>

                {/* <NavLink    
                    className={({ isActive }) => `nav-link${isActive ? ' nav-link-active' : ''}`}
                    to="/map">
                        Map</NavLink> */}
                
                {/* <NavLink
                    className={({ isActive }) => `nav-link${isActive ? ' nav-link-active' : ''}`}
                    to="/about">
                        About</NavLink> */}
            </div>
        </header>
    )
}

export default Header