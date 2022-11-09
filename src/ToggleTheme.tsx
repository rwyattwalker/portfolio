import React from 'react';
import { FaSun, FaMoon} from "react-icons/fa";
import { ThemeContext } from './ThemeContext';

const Toggle = ():JSX.Element => {
    const { theme, setTheme } = React.useContext(ThemeContext);
    return (
        <div className="transition duration-500 ease-in-out rounded-full p-2">
            {theme === 'dark' ? (
                <FaSun
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-[#fff] text-2xl cursor-pointer mt-1"
                />
            ) : (
                    <FaMoon
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="text-[#fff] text-2xl cursor-pointer p-[2px] mt-1"
                    />
                )}
        </div>
    );
};

export default Toggle;
