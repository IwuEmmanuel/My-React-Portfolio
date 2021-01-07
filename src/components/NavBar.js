import React from 'react';
import {NavLink} from 'react-router-dom';



export default function NavBar() {
    return <nav className="flex items-center justify-between flex-wrap bg-gray-500 p-6">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <NavLink to="/" exact activeClassName="text-white-900"
        className="font-semibold text-xl tracking-tight">IWU E.C</NavLink>
    </div>
    <div class="block lg:hidden">
        <button
            className="flex items-center px-3 py-2 border rounded text-teal-100 border-teal-400 hover:text-white hover:border-white"
            id="navbar-btn">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
        </button>
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto " id="navbar">
        <div className="text-sm lg:flex-grow  text-center lg:text-right">
            <NavLink to="/" href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-gray-900 mr-7 text-lg"
                activeClassName="text-white-900 bg-gray-400 rounded p-2">
                Home
            </NavLink>
            <NavLink to= "/about" href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-gray-900 mr-7 text-lg"
                activeClassName="text-white-900 bg-gray-400 rounded p-2">
                About Me!
            </NavLink>
            <NavLink to ="/post" href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-gray-900 mr-7 text-lg"
                activeClassName="text-white-900 bg-gray-400 rounded p-2">
                Blog Post
            </NavLink>
            <NavLink to="/projects" href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 mr-9 hover:text-gray-900 text-lg"
                activeClassName="text-white-900 bg-gray-400 rounded p-2">
                Projects
            </NavLink>
        </div>
    </div>
</nav>

    
}