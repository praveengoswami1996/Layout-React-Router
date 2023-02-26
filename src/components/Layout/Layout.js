import './Layout.css';
import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
    const linkActiveStyle = {
        backgroundColor: '#333',
        color: '#fff',
    }

    return (
        <>
        <nav className='app__navbar'>
            <ul>
                <li> 
                    <NavLink 
                        to="/"
                        className='Link' 
                        style={({ isActive }) => {return isActive ? linkActiveStyle : {}}}
                    >Home</NavLink> 
                </li>
                <li> 
                    <NavLink 
                        to="/about"
                        className='Link'
                        style={({ isActive }) => {return isActive ? linkActiveStyle : {}}}
                    >About</NavLink> 
                </li>
                <li> 
                    <NavLink 
                        to="/contact"
                        className='Link'
                        style={({ isActive }) => {return isActive ? linkActiveStyle : {}}}
                    >Contact</NavLink> 
                </li>
                <li> 
                    <NavLink 
                        to="/post"
                        className='Link'
                        style={({ isActive }) => {return isActive ? linkActiveStyle : {}}}
                    >Post</NavLink> 
                </li>
            </ul>
        </nav>
        
        <Outlet />
        </>
    )
}

export default Layout;