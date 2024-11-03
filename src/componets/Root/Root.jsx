import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Dashboard from "../Dashboard/Dashboard";

const Root = () => {
    return (
        <div className="max-w-7xl mx-auto">
             <Navbar></Navbar>
             <Outlet></Outlet>
             <Footer></Footer>
        </div>
    );
};

export default Root;