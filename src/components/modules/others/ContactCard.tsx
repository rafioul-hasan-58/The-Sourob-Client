
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, TimerIcon } from "lucide-react";
import { BsDiscord } from "react-icons/bs";
const ContactCard = () => {
    return (
        <div>
            <div className=" rounded-xl overflow-hidden cursor-pointer bg-blue-900/30 border border-blue-900/60 hover:border-blue-900 px-10 pt-3">
                <h1 className=" text-white text-2xl  font-semibold mt-2.5">Contact Information</h1>
                <div className="space-y-1.5  py-5 text-white">
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-sky-900/50  rounded-sm">
                            <MapPin className="text-sky-500 w-5 h-5" />
                        </div>
                        <div>
                            <p className="font-semibold text-lg">Location</p>
                            <p className="text-gray-400 text-lg">Sreepur,Gazipur</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-purple-900/40  rounded-sm">
                            <Mail className="text-purple-500 w-5 h-5" />
                        </div>
                        <div>
                            <p className="font-semibold text-lg">Email</p>
                            <p className="text-gray-400 text-lg">rafioulhasan2@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-green-900/40  rounded-sm">
                            <Phone className="text-green-500 w-5 h-5" />
                        </div>
                        <div>
                            <p className="font-semibold text-lg">Phone</p>
                            <p className="text-gray-400 text-lg">+8801752966422</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-orange-900/30  rounded-sm">
                            <TimerIcon className="text-orange-500 w-5 h-5" />
                        </div>
                        <div>
                            <p className="font-semibold text-lg">Available</p>
                            <p className="text-gray-400 text-lg">24 Hours</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 my-8">
                        <a
                            href="https://www.facebook.com/rafioul.sourav"
                            target="_blank"
                            aria-label="Facebook"
                        >
                            <div className="border p-2 w-[45px] rounded-sm bg-transparent hover:bg-gradient-to-tr from-purple-500 via-sky-400 to-blue-500 transition-all duration-300 ease-in-out">
                                <Facebook className="h-6 w-6 text-white hover:text-white transition" />
                            </div>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/rafioul-hasan-sourob"
                            target="_blank"
                            aria-label="Linkedin"
                        >
                            <div className="border p-2 w-[45px] rounded-sm bg-transparent hover:bg-gradient-to-tr from-purple-500 via-sky-400 to-blue-500 transition-all duration-300 ease-in-out">
                                <Linkedin className="h-6 w-6 text-white hover:text-white transition" />
                            </div>
                        </a>
                        <a
                            href="https://www.instagram.com/souravprodhan_58"
                            target="_blank"
                            aria-label="Portfolio"
                        >
                            <div className="border p-2 w-[45px] rounded-sm bg-transparent hover:bg-gradient-to-tr from-purple-500 via-sky-400 to-blue-500 transition-all duration-300 ease-in-out">
                                <Instagram className="h-6 w-6 text-white hover:text-white transition" />
                            </div>
                        </a>
                            <div className="border p-2 w-[45px] rounded-sm bg-transparent hover:bg-gradient-to-tr from-purple-500 via-sky-400 to-blue-500 transition-all duration-300 ease-in-out">
                                <BsDiscord className="h-6 w-6 text-white hover:text-white transition" />
                            </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactCard;