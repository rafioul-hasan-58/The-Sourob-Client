import Image from "next/image";
import contactImg from '../../../assets/contact.webp'
import { Mail, MapPin, Phone } from "lucide-react";
const ContactCard = () => {
    return (
        <div>
            <div className=" rounded-xl overflow-hidden cursor-pointer mb bg-purple-600 px-5 pt-5">
                <div className="mx-2">
                    <Image className="h-[280px] w-[490px] rounded-xl" src={contactImg} alt="image" width={450} height={400} />
                </div>
                <h1 className="text-white text-center border-b border-b-purple-500 text-xl lg:mx-36 pb-1.5">Contact Info</h1>
                <div className="space-y-1.5 px-2 py-5 text-white">
                    <p className="flex items-center gap-2"><Mail />rafioulhasan2@gmail.com</p>
                    <p className="flex items-center gap-2"><MapPin />Sreepur,Gazipur</p>
                    <p className="flex items-center gap-2 "><Phone />+8801752966422</p>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;