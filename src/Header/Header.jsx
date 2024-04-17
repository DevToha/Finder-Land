import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import './Header.css'
import { IoLogoElectron } from "react-icons/io5";

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/card">Cart</NavLink></li>
        <li><NavLink to="/updateProfile">Update Profile</NavLink></li>
        <li><NavLink to="/userProfile">User profile</NavLink></li>
        {/* <li><NavLink to="/TopRatedBook">Catalog</NavLink></li> */}

    </>

    return (
        <div className="px-7">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium">
                            {links}
                        </ul>
                    </div>

                    <div className="flex justify-center items-center text-center gap-2">
                        <p className="text-3xl"><IoLogoElectron /></p>
                        <div className="text12">Finder Land</div>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-medium">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && <span className="bg-gray-400 w-[45px] mr-5 rounded-full h-[45px]"><img className="rounded-full" src={user.photoURL} alt="" /></span>
                    }

                    {
                        user ?
                            <button onClick={handleSignOut} className="btn text-white bg-[#23BE0A]">LOG OUT</button>
                            :
                            <Link to="/logIn">
                                <button className="btn text-white bg-[#23BE0A]">LOGIN</button>
                            </Link>
                    }
                    {/* <Link to="/logIn">
                        <button className="btn lg:mr-10 text-white bg-[#23BE0A]">LogIn</button>
                    </Link> */}


                </div>
            </div>

        </div>
    );
};

export default Header;