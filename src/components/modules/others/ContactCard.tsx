import {
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    TimerIcon,
} from "lucide-react";
import { BsDiscord } from "react-icons/bs";

const contactDetails = [
    {
        label: "Location",
        value: "Sreepur, Gazipur",
        icon: MapPin,
        iconColor: "text-sky-500",
        bgColor: "bg-sky-900/50",
    },
    {
        label: "Email",
        value: "rafioulhasan2@gmail.com",
        icon: Mail,
        iconColor: "text-purple-500",
        bgColor: "bg-purple-900/40",
    },
    {
        label: "Phone",
        value: "+8801752966422",
        icon: Phone,
        iconColor: "text-green-500",
        bgColor: "bg-green-900/40",
    },
    {
        label: "Available",
        value: "24 Hours",
        icon: TimerIcon,
        iconColor: "text-orange-500",
        bgColor: "bg-orange-900/30",
    },
];

const socialLinks = [
    {
        href: "https://www.facebook.com/rafioul.sourav",
        label: "Facebook",
        icon: Facebook,
    },
    {
        href: "https://www.linkedin.com/in/rafioul-hasan-sourob",
        label: "Linkedin",
        icon: Linkedin,
    },
    {
        href: "https://www.instagram.com/souravprodhan_58",
        label: "Instagram",
        icon: Instagram,
    },
    {
        href: "https://discord.gg/1234912666137399327",
        label: "Discord",
        icon: BsDiscord,
    },
];

const ContactCard = () => {
    return (
        <div>
            <div className="rounded-xl overflow-hidden cursor-pointer bg-blue-900/30 border border-blue-900/60 hover:border-blue-900 px-10 pt-3">
                <h1 className="text-white text-2xl font-semibold mt-2.5">
                    Contact Information
                </h1>
                <div className="space-y-1.5 py-5 text-white">
                    {contactDetails.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="flex items-center gap-4">
                                <div className={`p-2 ${item.bgColor} rounded-sm`}>
                                    <Icon className={`${item.iconColor} w-5 h-5`} />
                                </div>
                                <div>
                                    <p className="font-semibold text-lg">{item.label}</p>
                                    <p className="text-gray-400 text-lg">{item.value}</p>
                                </div>
                            </div>
                        );
                    })}

                    <div className="grid grid-cols-4 my-8 gap-2">
                        {socialLinks.map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                >
                                    <div className="border p-2 w-[45px] rounded-sm bg-transparent hover:bg-gradient-to-tr from-purple-500 via-sky-400 to-blue-500 transition-all duration-300 ease-in-out">
                                        <Icon className="h-6 w-6 text-white hover:text-white transition" />
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;
