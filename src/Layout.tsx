import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Fotter";

export default function Layout() {
  return (
    
    <div className="main-container m-auto w-[90%]">
            <Navbar />
        <div>
            <Outlet />
        </div>
            <Footer/>
    </div>
   
    
  )
}
