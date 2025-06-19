import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";

const Root = () => {
  const location = useLocation();

  //  check if the Dashboard route
  const isDashboard = location.pathname === "/dashboard";
  return (
    <div className={isDashboard ? "bg-gray-100 min-h-screen" : "bg-white"}>
      <section className="mx-8">
        <Navbar isDashboard={isDashboard}></Navbar>
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Root;
