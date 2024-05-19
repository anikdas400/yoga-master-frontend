import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Switch } from "@mui/material";
import photo from '../../assets/dashboard/user-icon-2048x2048-ihoxz4vq.png'
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion"


const navLinks = [
    { name: "Home", route: "/" },
    { name: "Instructors", route: "/instructors" },
    { name: "Classes", route: "/classes" },
]

const theme = createTheme({
    palette: {
        primary: {
            main: "#674ea7",

        },
        secondary: {
            main: "#00ff00"
        },


    }
})

const Navbar = () => {

    const [navBg, setNavBg] = useState('bg-[#15151580]')

    // for MobileMenu
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    // for darkMode
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const darkClass = 'dark';
        const root = window.document.documentElement;
        if (isDarkMode) {
            root.classList.add(darkClass);
        } else {
            root.classList.remove(darkClass);
        }
    }, [isDarkMode])

    // for location after login or register

    const navigate = useNavigate();
    const location = useLocation();
    const [isHome, setIsHome] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [isFixed, setIsFixed] = useState(false)

    useEffect(() => {
        setIsHome(location.pathname === '/');
        setIsLogin(location.pathname === '/login');
        setIsFixed(location.pathname === '/register' || location.pathname === '/login');
    }, [location]);

    // for user login
    // const [user, setUser] = useState(false)
    const user = true

    // for scrollPosition

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.pageYOffset;
            setScrollPosition(currentPosition);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        if (scrollPosition > 100) {
            if (isHome) {
                setNavBg('bg-white backdrop-filter backdrop-blur-xl bg-opacity-0 dark:text-white text-black')
            } else {
                setNavBg('bg-white text-black dark:bg-black dark:text-white')
            }
        } else {
            setNavBg(`${isHome || location.pathname === '/' ? 'bg-transparent' : 'bg-white dark:bg-black'} dark:text-white text-black`)
        }

    }, [scrollPosition])

    // for Logout
    const handleLogout = ()=>{
        console.log('logout')
    }


    return (
        <motion.nav
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        trasition={{duration: 0.5}}
        className={`${isHome ? navBg : "bg-white dark:bg-black backdrop-blur-2xl"} ${isFixed ? "static" : "fixed"} top-0 transition-colors duration-500 ease-in-out w-full z-10`}
        >
            <div className="lg:w-[95%] mx-auto sm:px-6 lg:px-6">
                <div className="px-4 py-4 flex items-center justify-between">

                    {/* logo */}
                    <div onClick={()=> navigate('/')} className="dark:text-white text-black cursor-pointer pl-3 md:p-0" >
                        <h1 className="text-2xl inline-flex items-center font-bold"> YogaMaster <img className="h-8 w-8" src="/yoga-logo.png" alt="yogamaster" /></h1>
                        <p className="font-bold tracking-[6px]">Quick Explore</p>
                    </div>

                    {/* mobile menu icon */}
                    <div className="md:hidden">
                        <button type="button" onClick={toggleMobileMenu} className="text-gray-300 hover:text-white focus:outline-none">
                        <FaBars className="h-6 w-6 hover:text-primary" />
                        </button>
                    </div>
                    {/* navigationai link */}
                    <div className="hidden md:block text-black dark:text-white">
                        <div className="flex">
                            <ul className="flex items-center ml-10 space-x-4 pr-5  ">
                                {
                                    navLinks.map((link) => (
                                        <li key={link.route}><NavLink to={link.route} className={({ isActive }) =>
                                            `font-bold ${isActive ? 'text-secondary' : `${navBg.includes('bg-transparent') ? 'text-black dark:text-white' : 'text-black dark:text-white'}`} hover:text-secondary duration-200`

                                        }>{link.name}</NavLink></li>
                                    ))
                                }

                                {/* based on users */}
                                {
                                    user ? null : isLogin ? (
                                        <li><NavLink to='/register' className={({ isActive }) =>
                                            `font-bold ${isActive ? 'text-secondary' : `${navBg.includes('bg-transparent') ? 'text-black dark:text-white' : 'text-black dark:text-white'}`} hover:text-secondary duration-200`

                                        }>Register</NavLink></li>
                                    ) : (
                                        <li>
                                            <NavLink to='/login' className={({ isActive }) =>
                                                `font-bold ${isActive ? 'text-secondary' : `${navBg.includes('bg-transparent') ? 'text-black dark:text-white' : 'text-black dark:text-white'}`} hover:text-secondary duration-200`

                                            }>Login</NavLink>
                                        </li>
                                    )
                                }
                                {
                                    user && <li>
                                        <NavLink to='/dashboard' className={({ isActive }) =>
                                            `font-bold ${isActive ? 'text-secondary' : `${navBg.includes('bg-transparent') ? 'text-black dark:text-white' : 'text-black dark:text-white'}`} hover:text-secondary duration-200`

                                        }>Dashboard</NavLink>
                                    </li>
                                }
                                {
                                    user && <li>
                                        <img src={user?.photoURL || photo} className="h-[40px] w-[40px] rounded-full" alt="user pic" />
                                    </li>
                                }
                                {
                                    user && <li>
                                        <NavLink to='/logout' onClick={handleLogout} className={"font-bold px-2 py-2 bg-secondary text-white dark:text-white rounded-xl"}>LogOut</NavLink>
                                    </li>
                                }




                                {/* color toggle */}
                                <li>
                                    <ThemeProvider theme={theme}>
                                        <div className="">
                                            <Switch className="p-6" onChange={() => setIsDarkMode(!isDarkMode)} />
                                            <h2 className="text-[10px] ml-2 -mt-2">Light/Dark</h2>
                                        </div>

                                    </ThemeProvider>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </motion.nav>
    );
};

export default Navbar;