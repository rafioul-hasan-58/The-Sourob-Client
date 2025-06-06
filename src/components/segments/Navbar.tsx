'use client';
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Projects', path: '/projects' },
        { label: 'Blogs', path: '/blogs' },
        { label: 'dashboard', path: '/dashboard' },
    ];
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    return (
        <>
            <nav className=" w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
                <a className="flex" href="#top">
                    <p className="text-3xl font-semibold italic bg-gradient-to-r from-purple-500 to-sky-400 text-transparent bg-clip-text font-[cursive] ">
                        Rafioul Sourav
                    </p>
                    <p className="mt-6 h-2 w-2 rounded-full bg-pink-500"></p>
                </a>
                <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3  shadow-sm shadow-purple-500 bg-opacity-50">
                    {
                        navItems.map((nav, idx) => (<Link key={idx} className="font-Ovo" href={`${nav.path}`}> <li className={`text-white  ${pathname === nav.path ? 'border-b-2 border-purple-500' : ''}`}>{nav.label}</li></Link>))
                    }
                </ul>
                {/* mobile menu */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden lg:hidden">
                    {
                        isOpen ? <X /> : <Menu />
                    }

                </button>
                <ul className={`flex md:hidden flex-col gap-4 px-10 py-20 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    {
                        navItems.map((nav, idx) => (<Link key={idx} onClick={() => setIsOpen(false)} href={`${nav.path}`}> <li>{nav.label}</li></Link>))
                    }
                </ul>
            </nav>
        </>
    );
};

export default Navbar;