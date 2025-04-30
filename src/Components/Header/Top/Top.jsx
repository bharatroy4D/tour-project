import React from 'react';
import {
    FaSquareFacebook,
    FaSquareGooglePlus,
    FaSquareInstagram,
    FaSquareTwitter,
} from 'react-icons/fa6';

const Top = () => {
    return (
        <div className='w-11/12 mx-auto flex justify-between items-center border-b border-gray-300/30 '>
            {/* Social icons and contact info */}
            <div className='flex gap-3 text-xl items-center text-white'>
                <FaSquareFacebook />
                <FaSquareInstagram />
                <FaSquareTwitter />
                <FaSquareGooglePlus />
                <span className='text-sm ml-4'>01714414775 |</span>
                <span className='text-sm'>Contact@domain.com</span>
            </div>

            {/* Login and dropdown */}
            <div>
                <ul className="menu menu-horizontal px-1 text-white">
                    <li><a>Login</a></li>
                    <li><a>Sign Up</a></li>
                    <li>
                        <details>
                            <summary>EN</summary>
                            <ul className="bg-base-100 rounded-t-none p-2 text-black">
                                <li><a>English</a></li>
                                <li><a>Bangla</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>USDT</summary>
                            <ul className="bg-base-100 rounded-t-none p-2 text-black">
                                <li><a>English</a></li>
                                <li><a>Bangla</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Top;
