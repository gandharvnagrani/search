import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = ({darkTheme, setDarkTheme}) => {
    return (
        <div className = "p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
            <div className="flex justify-between items-center space-x-5 w-screen">
                <Link to="/">
                    <p className = "text-2xl bg-blue-900 text-white font-bold py-1 px-2 rounded dark:bg-gray-500 dark:text-white">
                        SearchClone
                    </p>
                </Link>
                <button type = "button" onClick = {() => setDarkTheme(!darkTheme)}>
                    {darkTheme ? 'Light' : 'Dark'}
                </button>
            </div>
            <h1>Navbar</h1>
        </div>
    );
}

