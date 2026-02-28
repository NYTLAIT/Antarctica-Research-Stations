import './Header.css';
// import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className='Header'>
            <h1>WHITEDESERT</h1>
            {/* <div>
                <NavLink
                    className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
                    to="/">List</NavLink>
                <NavLink
                    className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
                    to="/about">About</NavLink>
            </div> */}
        </header>
    )
}

export default Header