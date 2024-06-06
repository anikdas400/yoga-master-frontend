import { Outlet } from "react-router-dom";
import Navbar from "../components/headers/Navbar";
// import Home from "../pages/Home/Home";



const MainLayout = () => {
    return (
        <main className="dark:bg-black overflow-hidden">
            <Navbar/>           
            <Outlet/>
        </main>
    );
};

export default MainLayout;