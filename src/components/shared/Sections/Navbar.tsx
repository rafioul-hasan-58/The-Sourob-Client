'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
    const navItems = [
        { label: 'Home', path: '#top', type: 'anchor' },
        { label: 'About', path: '#about', type: 'anchor' },
        { label: 'Contact', path: '#contact', type: 'anchor' },
        { label: 'Skills', path: '#skills', type: 'anchor' },
        { label: 'Projects', path: '#projects', type: 'anchor' },
        { label: 'Blogs', path: '#blogs', type: 'anchor' },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    return (
        <>
         <div className="flex justify-center">
               <nav className=" fixed px-5 lg:px-8 mt-4 py-4 flex items-center justify-center z-50 bg-transparent  w-screen">
                <div className=" max-w-screen-2xl mx-auto px-5 flex gap-96">
                    <a className="flex" href="#top">
                        <p className="text-3xl font-semibold italic bg-gradient-to-r from-purple-500 to-sky-400 text-transparent bg-clip-text font-[cursive] ">
                            Rafioul Sourob
                        </p>
                        <p className="mt-6 h-2 w-2 rounded-full bg-pink-500"></p>
                    </a>
                    <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 shadow-sm shadow-purple-500 bg-opacity-50">
                        {navItems.map((nav, idx) => (
                            <Link key={idx} className="font-Ovo" href={`${nav.path}`}>
                                <li className={`text-white ${pathname === nav.path ? 'border-b-2 border-purple-500' : ''}`}>
                                    {nav.label}
                                </li>
                            </Link>
                        ))}
                    </ul>
                    {/* mobile menu */}
                    <ul
                        className={`flex md:hidden flex-col gap-4 px-10 py-20 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                            }`}
                    >
                        {navItems.map((nav, idx) => (
                            <Link key={idx} onClick={() => setIsOpen(false)} href={`${nav.path}`}>
                                <li>{nav.label}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </nav>
         </div>

        </>
    );
};

export default Navbar;