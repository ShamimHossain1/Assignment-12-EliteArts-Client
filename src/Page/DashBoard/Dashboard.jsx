import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHamburger, FaShoppingCart } from 'react-icons/fa';
import useCart from '../../hooks/useCart';
import useAdmin from '../../hooks/useAdmin';
import useIns from '../../hooks/useIns';
import useAuth from '../../hooks/useAuth';
import useTitle from '../../hooks/UseTitle';

const Dashboard = () => {
    const [cart] = useCart()
    const { user } = useAuth()
    console.log(user.email)
    useTitle('Elite Arts | DashBoard')

    const [isInstructor, setIsInstructor] = useState(false);
    const email = user.email // Replace with the desired email

    useEffect(() => {
        fetch(`https://ass-12-server-rose.vercel.app/users/ins/${email}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setIsInstructor(data.instructor);
            })
            .catch(error => {
                console.log(error);
            });
    }, [email]);

    //const isIns = true;
    const [isAdmin] = useAdmin();
    //const [isInstructor] = useIns();
    //console.log(isInstructor)
    //console.log(isAdmin)




    return (
        <div>
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">

                    <Outlet></Outlet>
                    <div>
                        <img src="https://assets.materialup.com/uploads/cf947cf0-272a-452a-bb93-a8b7b7bdea95/preview.gif" alt="" />
                    </div>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side rounded">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {
                            isAdmin ? <>
                                <li><NavLink to="/dashboard">Admin</NavLink></li>
                                
                                <li><NavLink to="/dashboard/allusers">Users</NavLink></li>
                                <li><NavLink to="/dashboard/courseManage">Course Manage</NavLink></li>
                            </> :
                                isInstructor ? <>
                                    <li><NavLink to="/dashboard">Instructor Dashboard</NavLink></li>
                                    {/* <li><NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart>Cart +{cart?.length}</NavLink></li> */}
                                    <li><NavLink to="/dashboard/add">Add a Class</NavLink></li>
                                    <li><NavLink to="/dashboard/myclass">My class</NavLink></li>

                                </> : <>
                                    <li><NavLink to="/dashboard">User Dashboard</NavLink></li><li><NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart>Cart +{cart?.length}</NavLink></li>
                                    <li><NavLink to="/dashboard/history">History</NavLink></li>
                                    <li><NavLink to="/dashboard/enrolled">My Enrolled Classes</NavLink></li>
                                </>
                        }

                        <div className='divider'></div>

                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/Instructors"> Instructors</NavLink></li>
                        <li><NavLink to="/course">Classes</NavLink></li>
                    </ul>

                </div>

            </div>



        </div>
    );
};

export default Dashboard;