import React from "react";

import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate();
    const auth = localStorage.getItem('user');
    const logOut = () => {
        localStorage.clear();
        navigate('/');
    }
    return (
        <div>
        <img src="https://w7.pngwing.com/pngs/482/584/png-transparent-bitstrips-snapchat-nose-millennials-eye-bitmoji-face-payment-head.png" alt="logo" />
            {auth ? <ul className="navbar">
                <li className="nav-items"><Link to="/"> PRODUCT </Link> </li>
                <li><Link to="/add"> ADD PRODUCT</Link> </li>
                <li><Link to="/update"> UPDATE PRODUCT</Link> </li>
                <li><Link to="/profile"> PROFILE </Link> </li>
                <li><Link onClick={logOut} to="/signup"> LOGOUT ({JSON.parse(auth).name}) </Link></li>
            </ul>
                :
                <ul className="navbar nav-right">
                    <li> <Link to="/signup"> SIGNUP </Link>  </li>
                    <li><Link to="/login"> LOGIN </Link></li>
                </ul>


            }

        </div>
    );
}

export default Nav;