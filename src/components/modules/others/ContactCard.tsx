import Image from "next/image";
import contactImg from '../../../assets/contact.png'
// import { Mail, MapPin, Phone } from "lucide-react";
const ContactCard = () => {
    return (
        <div>
            <div className=" rounded-xl overflow-hidden cursor-pointer mb ">
                <div className="mx-2">
                    <Image className="h-[450px] w-full" src={contactImg} alt="image" width={450} height={400} />
                </div>
                {/* <h1 className="text-white text-center border-b border-b-purple-500 text-xl lg:mx-36 pb-1.5">Contact Info</h1>
                <div className=" text-purple-600 text-center flex justify-center">
                    <div className="space-y-1.5 pt-1.5">
                        <p className="flex items-center gap-2"><Mail />rafioulhasan2@gmail.com</p>
                        <p className="flex items-center gap-2"><MapPin />Sreepur,Gazipur</p>
                        <p className="flex items-center gap-2"><Phone />+8801752966422</p>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default ContactCard;