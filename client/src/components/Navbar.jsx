import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useAuth } from "../contexts/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <nav className={`md:bg-transparent p-2 vsm:p-4 font-primary uppercase absolute top-0 w-full z-10 ${menuOpen?"bg-[#F8AA26]":"bg-transparent"}`}>
        <div className="container min-w-[98%] flex flex-col justify-around items-center md:flex-row md:text-[1.3rem] md:justify-between text-[#080909] font-semibold mx-auto ease-in duration-300 md:px-4">
          <div className="logoIconContainer flex w-full justify-between items-center">
            <NavLink to="/" className="text-[1.5rem] font-semibold">
              <img
                src={logo}
                alt="logo"
                className="w-[3rem] h-[3rem] vsm:w-[4rem] vsm:h-[4rem] gsm:w-[5rem] gsm:h-[5rem] md:w-[6rem] md:h-[6rem]"
              />
            </NavLink>
            {!menuOpen ? (
              <IoMenu onClick={() => toggleMenu()} className="text-[1.5rem] gsm:text-[2rem] md:hidden" />
            ) : (
              <RxCross1
                onClick={() => toggleMenu()}
                className="text-[1.5rem] gsm:text-[2rem] md:hidden"
              />
            )}
          </div>

          <div className={`${menuOpen?"block":"hidden"} md:text-[1.5rem] md:font-bold md:block pt-2 flex flex-col md:flex-row w-full md:w-fit md:bg-transparent md:space-x-4 md:justify-center md:items-center gap-2 text-right ease-in duration-300`}>
            <NavLink to="/pets">Pets</NavLink>
            {isLoggedIn ? (
              <>
                <NavLink to="/profile">Profile</NavLink>
                <button
                  onClick={() => {
                    toast.success("Logout Successful!");
                    logout();
                    localStorage.clear();
                    navigate("/");
                  }}
                  className="uppercase"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/login">Login</NavLink>
              </>
            )}
          </div>
        </div>
      </nav>
      <ToastContainer position="top-center" />
    </>
  );
}
