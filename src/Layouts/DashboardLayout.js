import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import NavBar from '../Pages/Shared/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    return (
        <div>
            <NavBar />
            <div className="drawer drawer-mobile">
                <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content max-w-xl md:max-w-3xl lg:max-w-screen-2xl px-4 bg-brand py-6 md:py-10">
                    <Outlet />
                    <label htmlFor="dashboardDrawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-dimBlue text-light ">
                        {/* <!-- Sidebar content here --> */}
                        <li className='my-1 hover:bg-ruby'><Link to="/dashboard">My Appointments</Link></li>
                        {isAdmin && <>
                            <li className='my-1 hover:bg-ruby'><Link to="/dashboard/allUsers">All Users</Link></li>
                            <li className='my-1 hover:bg-ruby'><Link to="/dashboard/addDoctor">Add a Doctor</Link></li>
                            <li className='my-1 hover:bg-ruby'><Link to="/dashboard/manageDoctors">Manage Doctors</Link></li>
                        </>}
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;