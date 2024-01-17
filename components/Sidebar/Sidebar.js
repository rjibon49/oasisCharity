import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, reset } from '../../features/authSlice';

const Sidebar = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const logout = () => {
        dispatch(logOut());
        dispatch(reset());
        router.push("/login");
    };

    return (
        <div>
            {user && <li className="fw-bold nav-item">{user.username} <br /> {user.email} <br /><span style={{color:"red"}}>{user.role}</span></li>  }
            <p className="menu-label">Settings</p>
                <ul className="menu-list">
                    <li className="nav-item">
                        <Link href="/dashboard/profile/doctor/createprofile"><a className="nav-link">Create Profile</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/dashboard/user/adduser"><a className="nav-link">Add User</a></Link>
                    </li>
                    <li className="nav-item" style={{cursor:"pointer"}}>
                        <p className="nav-link" onClick={logout}>Logout</p>
                    </li>
                </ul>
        </div>
    );
};

export default Sidebar;