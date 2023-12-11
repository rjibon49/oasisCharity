import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useRouter } from 'next/router';
// import { LogOut, reset } from '../../features/authSlice';
import Link from 'next/link';

const Sidebar = () => {
    // const dispatch = useDispatch();
    // const router = useRouter();
    // const { user} = useSelector((state) => state.auth);

    // const logout = () => {
    //     dispatch(LogOut());
    //     dispatch(reset());
    //     router.push("/login");
    //   };

    return (
        <div>
            <p className="menu-label">Settings</p>
                <ul className="menu-list">
                <li className="nav-item">
                                <Link href="/contact"><a className="nav-link">Contact</a></Link>
                            </li>
                    <li>
                        {/* <button onClick={logout} className="button">
                         Logout
                        </button> */}
                    </li>
                </ul>
        </div>
    );
};

export default Sidebar;