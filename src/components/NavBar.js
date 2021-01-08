import React from 'react';
import {NavLink} from 'react-router-dom';
import image from "../Profile2.png";



export default function NavBar() {
    return (
    <header className="lg:px-16 px-6 bg-gray-500 flex flex-wrap items-center lg:py-4 py-2">
         <div className="flex-1 flex justify-between items-center">
                <NavLink to="/" exact activeClassName="text-white-900"
                 className="flex items-center flex-shrink-0 mr-6">
                <svg className="fill-current h-8 w-8" width="30" height="36" viewBox="0 0 32 36" xmlns="http://www.w3.org/2000/svg"><path d="M15.922 35.798c-.946 0-1.852-.228-2.549-.638l-10.825-6.379c-1.428-.843-2.549-2.82-2.549-4.501v-12.762c0-1.681 1.12-3.663 2.549-4.501l10.825-6.379c.696-.41 1.602-.638 2.549-.638.946 0 1.852.228 2.549.638l10.825 6.379c1.428.843 2.549 2.82 2.549 4.501v12.762c0 1.681-1.12 3.663-2.549 4.501l-10.825 6.379c-.696.41-1.602.638-2.549.638zm0-33.474c-.545 0-1.058.118-1.406.323l-10.825 6.383c-.737.433-1.406 1.617-1.406 2.488v12.762c0 .866.67 2.05 1.406 2.488l10.825 6.379c.348.205.862.323 1.406.323.545 0 1.058-.118 1.406-.323l10.825-6.383c.737-.433 1.406-1.617 1.406-2.488v-12.757c0-.866-.67-2.05-1.406-2.488l-10.825-6.379c-.348-.21-.862-.328-1.406-.328zM26.024 13.104l-7.205 13.258-3.053-5.777-3.071 5.777-7.187-13.258h4.343l2.803 5.189 3.107-5.832 3.089 5.832 2.821-5.189h4.352z"></path></svg>
                <h1 className="font-semibold ml-2 lg:text-2xl text-lg tracking-tight">IWU E.C</h1>
                </NavLink>
        </div>
                <label for="menu-toggle" className="cursor-pointer lg:hidden block">
                    <svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>
                </label>
                <input type="checkbox" className="hidden" id="menu-toggle"/>
            <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
                <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                <NavLink to="/" href="#responsive-header"
                    className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-gray-900 mr-7 text-lg"
                    activeClassName="text-white-900 bg-gray-600 rounded p-2">
                    Home
                </NavLink>
                <NavLink to="/about" href="#responsive-header"
                    className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-gray-900 mr-7 text-lg"
                    activeClassName="text-white-900 bg-gray-400 rounded p-2">
                    About Me!
                </NavLink>
                <NavLink to="/post" href="#responsive-header"
                    className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-gray-900 mr-7 text-lg"
                    activeClassName="text-white-900 bg-gray-400 rounded p-2">
                    Blog Post
                </NavLink>
                <NavLink to="/projects" href="#responsive-header"
                    className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 mr-9 hover:text-gray-900 text-lg"
                    activeClassName="text-white-900 bg-gray-400 rounded p-2">
                    Projects
                </NavLink>  
                <NavLink to="/about" className="lg:ml-4 pt-2 flex items-center justify-start lg:mb-0 mb-4 cursor-pointer">
                   <img src={image} alt="Emmanuel" className="rounded-full w-10 h-10 border-2 border-transparent hover:border-blue-400 lg:flex"/>
                </NavLink>
           </ul>
           </div>
    </header>

    )    
}