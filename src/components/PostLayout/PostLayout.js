import { NavLink, Outlet } from "react-router-dom";
import './PostLayout.css';

function PostLayout() {
    const linkActiveStyle = {
        backgroundImage: "linear-gradient(to right, yellow,gold)"
    }

    return (
        <div className="app__postlayout">
            <nav className='app__postlayout-navbar'>
                <ul>
                    <li> 
                        <NavLink 
                            to="/post/mobile"
                            className='app__postlayout-navbar_links' 
                            style={({ isActive }) => {return isActive ? linkActiveStyle : {}}}
                        >Post on Mobile</NavLink> 
                    </li>
                    <li> 
                        <NavLink 
                            to="/post/tablet"
                            className='app__postlayout-navbar_links'
                            style={({ isActive }) => {return isActive ? linkActiveStyle : {}}}
                        >Post on Tablet</NavLink> 
                    </li>
                    <li> 
                        <NavLink 
                            to="/post/laptop"
                            className='app__postlayout-navbar_links'
                            style={({ isActive }) => {return isActive ? linkActiveStyle : {}}}
                        >Post on Laptop</NavLink> 
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default PostLayout;