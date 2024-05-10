import { Outlet } from "react-router-dom";
import Navbar from "../components/headers/Navbar";



const MainLayout = () => {
    return (
        <main className="dark:bg-black overflow-hidden">
            <Navbar/>
            <Outlet/>
            <h2>footer</h2>
        </main>
    );
};

export default MainLayout;