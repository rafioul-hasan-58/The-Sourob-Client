import { FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { RiFileUserLine } from "react-icons/ri";

const links = [
    {
        href: "https://github.com/rafioul-hasan-58",
        label: "GitHub",
        icon: <FaGithub className="border-[1px] w-[60px] h-[60px] group-hover:border-0 p-4 border-gray-600  border-l-0" />,
        color: "text-white",
    },
    {
        href: "mailto:rafioulhasan2@gmail.com",
        label: "Email",
        icon: <FaEnvelope className="border-[0.5px] border-gray-600 border-t-0 w-[60px] h-[60px] group-hover:border-0 p-4  border-l-0" />,
        color: "text-red-500",
    },
    {
        href: "https://drive.google.com/file/d/143HeYwMCJZreCOe1BOLgEL3aC15pfmxH/view?usp=sharing",
        label: "Resume",
        icon: <RiFileUserLine className="border-[1px] border-gray-600 border-t-0 w-[60px] h-[60px] group-hover:border-0 p-4  border-l-0" />,
        color: "text-white",
    },
    {
        href: "https://wa.me/01752966422",
        label: "WhatsApp",
        icon: <FaWhatsapp className="border-[1px] border-gray-600 border-t-0 w-[60px] h-[60px] group-hover:border-0 p-4 border-l-0" />,
        color: "text-green-500",
    },
];

export default function SocialContact() {
    
    return (
        <div className="fixed lg:top-1/3 lg:left-0 z-50 top-[80px]">
            {links.map((link, i) => (
                <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center"
                >
                    {/* Bordered container that expands on hover */}
                    <div className="overflow-hidden transition-all duration-300 border  border-transparent group-hover:border-purple-500 group-hover:w-40 w-[62px] h-full   bg-black flex items-center">
                        {/* Icon */}
                        <div
                            className={` ${link.color} transition-transform duration-300 group-hover:translate-x-2`}
                        >
                            {link.icon}
                        </div>

                        {/* Label */}
                        <span className="ml-2 text-sm text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {link.label}
                        </span>
                    </div>
                </a>
            ))}
        </div>
    );
}
