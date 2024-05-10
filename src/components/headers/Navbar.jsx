import { useState } from "react";
import { NavLink } from "react-router-dom";


const navLinks = [
    {name: "Home", route: "/"},
    {name: "Instructors", route: "/instructors"},
    {name: "Classes", route: "/classes"},
]

const Navbar = () => {

    const [navBg, setNavBg] = useState('bg-[#15151580]')


    return (
        <nav>
            <div className="lg:w-[95%] mx-auto sm:px-6 lg:px-6">
                <div className="px-4 py-4 flex items-center justify-center">
                    {/* logo */}
                    <div >
                        <h1 className="text-2xl inline-flex items-center font-bold"> YogaMaster <img className="h-8 w-8" src="/yoga-logo.png" alt="yogamaster" /></h1>
                       <p className="font-bold tracking-[6px]">Quick Explore</p>
                    </div>

                    {/* mobile menu icon */}
                    {/* navigationai link */}
                    <div className="hidden md:block text-black dark:text-white">
                        <div className="flex">
                            <ul className="flex items-center ml-10 space-x-4 pr-5 ">
                                {
                                    navLinks.map((link)=>(
                                        <li key={link.route}><NavLink to={link.route}  className={({ isActive}) =>
                                            `font-bold ${isActive ? 'text-secondary' : `${navBg.includes('bg-transparent') ? 'text-white' : 'text-black dark:text-white'}`} hover:text-secondary duration-200`
                                              
                                          }>{link.name}</NavLink></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;