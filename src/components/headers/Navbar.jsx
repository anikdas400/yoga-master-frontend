import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Switch } from "@mui/material";


const navLinks = [
    { name: "Home", route: "/" },
    { name: "Instructors", route: "/instructors" },
    { name: "Classes", route: "/classes" },
]

const theme = createTheme({
    palette:{
        primary:{
            main:"#674ea7",
        
        },
        secondary:{
            main: "#00ff00"
        },
       
        
    }
})

const Navbar = () => {

    const [navBg, setNavBg] = useState('bg-[#15151580]')

    // for MobileMenu
    const [isMobileMenuOpen,setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu =()=>{
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    // for darkMode
    const [isDarkMode,setIsDarkMode] = useState(false)

    useEffect(()=>{
        const darkClass = 'dark';
        const root = window.document.documentElement;
        if(isDarkMode){
            root.classList.add(darkClass);
        }else{
            root.classList.remove(darkClass);
        }
    },[isDarkMode])

    // for location after login or register

    const navigate = useNavigate();
    const location = useLocation();
    const [isHome,setIsHome] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [isFixed,setIsFixed] = useState(false)

    useEffect(()=>{
        setIsHome(location.pathname === '/');
        setIsLogin(location.pathname === '/login');
        setIsFixed(location.pathname === '/register' || location.pathname === '/login');
    },[location]);

    // for user login
    const [user,setUser] = useState(false)

    // for scrollPosition

    useEffect(()=>{
        const handleScroll =()=>{
            const currentPosition = window.pageYOffset;
            setScrollPosition(currentPosition);
        };
        window.addEventListener('scroll', handleScroll);
        return ()=> window.removeEventListener('scroll',handleScroll)
    },[])

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(()=>{
        if( scrollPosition > 100){
            if(isHome){
                setNavBg('bg-white backdrop-filter backdrop-blur-xl bg-opacity-0 dark:text-white text-black')
            }else{
                setNavBg('bg-white text-black dark:bg-black dark:text-white')
            }
        }else{
            setNavBg(`${isHome || location.pathname === '/' ? 'bg-transparent' : 'bg-white dark:bg-black'} dark:text-white text-black`)
        }
        
    },[scrollPosition])


    return (
        <nav>
            <div className="lg:w-[95%] mx-auto sm:px-6 lg:px-6">
                <div className="px-4 py-4 flex items-center justify-between">
                    {/* logo */}
                    <div className="dark:text-white text-black " >
                        <h1 className="text-2xl inline-flex items-center font-bold"> YogaMaster <img className="h-8 w-8" src="/yoga-logo.png" alt="yogamaster" /></h1>
                        <p className="font-bold tracking-[6px]">Quick Explore</p>
                    </div>

                    {/* mobile menu icon */}
                    {/* navigationai link */}
                    <div className="hidden md:block text-black dark:text-white">
                        <div className="flex">
                            <ul className="flex items-center ml-10 space-x-4 pr-5 ">
                                {
                                    navLinks.map((link) => (
                                        <li key={link.route}><NavLink to={link.route} className={({ isActive }) =>
                                            `font-bold ${isActive ? 'text-secondary' : `${navBg.includes('bg-transparent') ? 'text-black' : 'text-black dark:text-white'}`} hover:text-secondary duration-200`

                                        }>{link.name}</NavLink></li>
                                    ))
                                }

                                {/* based on users */}

                                <NavLink to='/login' className={({ isActive }) =>
                                    `font-bold ${isActive ? 'text-secondary' : `${navBg.includes('bg-transparent') ? 'text-black' : 'text-black dark:text-white'}`} hover:text-secondary duration-200`

                                }>Login</NavLink>

                                {/* color toggle */}
                                <li>
                                <ThemeProvider theme={theme}>
                                    <div className="">
                                    <Switch className="p-6" onChange={()=> setIsDarkMode(!isDarkMode)}/>
                                    <h2 className="text-[10px] ml-2 -mt-2">Light/Dark</h2>
                                    </div>

                                </ThemeProvider>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;