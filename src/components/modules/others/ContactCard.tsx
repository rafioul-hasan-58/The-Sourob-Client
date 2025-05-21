import Image from "next/image";
import contactImg from '../../../assets/contact.webp'
import { Mail, MapPin, Phone, TimerIcon } from "lucide-react";
const ContactCard = () => {
    return (
        <div>
            <div className=" rounded-xl overflow-hidden cursor-pointer bg-gradient-to-r from-purple-700 to-purple-500">
                <div className="lg:px-8 lg:pt-8 px-3 pt-3">
                    <Image className="lg:h-[280px] lg:w-[490px] rounded-xl" src={contactImg} alt="image" width={450} height={400} />
                </div>
                <h1 className=" text-white text-center border-b border-b-purple-500 text-xl lg:mx-36 py-2.5">Contact Info</h1>
                <div className="space-y-1.5 pl-8 py-5 text-white">
                    <p className="flex items-center gap-2"><Mail />rafioulhasan2@gmail.com</p>
                    <p className="flex items-center gap-2"><MapPin />Sreepur,Gazipur</p>
                    <p className="flex items-center gap-2 "><Phone />+8801752966422</p>
                    <p className="flex items-center gap-2 "><TimerIcon />24 hours</p>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;