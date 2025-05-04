import React from 'react';
import {
    FaSquareFacebook,
    FaSquareGooglePlus,
    FaSquareInstagram,
    FaSquareTwitter,
} from 'react-icons/fa6';

const Top = () => {
    return (
        <div className='hidden lg:block w-11/12 mx-auto border-b border-gray-300/30 '>
            <div className='flex flex-col md:flex-row justify-between items-center gap-2 text-white'>
                {/* Social icons and contact info */}
                <div className='flex flex-wrap justify-center md:justify-start gap-3 text-xl items-center'>
                    <FaSquareFacebook />
                    <FaSquareInstagram />
                    <FaSquareTwitter />
                    <FaSquareGooglePlus />
                    <span className='text-sm ml-0 md:ml-4'>01714414775 |</span>
                    <span className='text-sm'>Contact@domain.com</span>
                </div>

                {/* Login and dropdown */}
                <div>
                    <ul className="menu menu-horizontal px-1 text-white flex flex-wrap justify-center md:justify-end gap-2">
                        <li><a>Login</a></li>
                        <li><a>Sign Up</a></li>
                        <li>
                            <details>
                                <summary>EN</summary>
                                <ul className="bg-base-100 rounded-t-none p-2 text-black z-50">
                                    <li><a>English</a></li>
                                    <li><a>Bangla</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>USDT</summary>
                                <ul className="bg-base-100 rounded-t-none p-2 text-black z-50">
                                    <li><a>USD</a></li>
                                    <li><a>BDT</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Top;
