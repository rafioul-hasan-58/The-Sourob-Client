import { socialIcons } from "./ConstantData";

const SocialContact = () => {
    return (
        <div>
            <div>
                <p className="uppercase text-gray-500 my-4">f i n d <span className="mx-2">w i t h</span> m e</p>
                <div className="mt-1 flex gap-5">
                    {socialIcons.map((item) => (
                        <div
                            key={item.id}
                            className="w-16 text-2xl h-16 flex justify-center items-center bg-white rounded-md text-gray-500 hover:text-white shadow-md cursor-pointer hover:bg-[#FF0050] transition-all duration-300 hover:-translate-y-1"
                        >
                            < item.icon />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SocialContact