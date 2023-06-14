import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import useCart from '../../hooks/useCart';
import useIns from '../../hooks/useIns';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart()
    //console.log(cart)

    const [isInstructor] = useIns();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    return (
        <div>

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Instructors"> Instructors</Link></li>
                            <li><Link to="/course">Classes</Link></li>


                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">The Pencil Palette</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/instructors"> Instructors</Link></li>
                        <li><Link to="/course">Classes</Link></li>
                    </ul>
                </div>
                <div className="navbar-end ">




                    {
                        user ? <>
                            <Link to="/dashboard/cart">
                                <label tabIndex={0} className="btn btn-ghost btn-circle">
                                    <div className="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                        <span className="badge badge-sm indicator-item">+{cart?.length || 0}</span>
                                    </div>
                                </label>
                            </Link>
                            {/* <span>{user?.displayName}</span> */}
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li className='text-center'>Hello, {user?.displayName}</li>
                                    <div className="divider"></div>
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><Link to="/dashboard">Dashboard</Link></li>

                                    {
                                        user ? <>
                                            <li><Link onClick={handleLogOut} >LogOut</Link></li>
                                        </> : <>
                                            <li><Link to="/login">Login</Link></li>
                                            <li><Link to="/signUp">Sign Up</Link></li>
                                        </>
                                    }

                                    
                                </ul>
                            </div>
                        </> : <>
                            <div className='list-none md:flex gap-5 hidden '>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/signUp">Sign Up</Link></li>
                            </div>
                        </>
                    }
                    {/* <Link to="/dashboard"><button className="btn">Button</button></Link> */}
                </div>

                { }
            </div>

            {/* <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <Link to="/course">Course</Link>
                {
                    user ? <>
                        <span>{user?.displayName}</span>
                        <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
                    </> : <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signUp">Sign Up</Link></li>
                    </>
                }
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Navbar;