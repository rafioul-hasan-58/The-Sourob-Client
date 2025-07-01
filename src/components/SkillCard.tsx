import { ISkill } from "@/types";
import Image from "next/image";

const SkillCard = async ({ skill }: { skill: ISkill }) => {
    return (
        <div className="border-2 flex items-center gap-4 p-4 lg:w-[290px] border-gray-700 rounded-xl bg-gray-900">
            <div className="bg-gray-800 p-2 rounded-md">
                <Image
                    src={skill.icon || "https://i.ibb.co/vx48WmhB/logos-daisyui-icon.png"}
                    width={40}
                    height={40}
                    alt="Firebase Icon"
                />
            </div>
            <div>
                <h2 className="text-white font-semibold text-lg">{skill.title}</h2>
                <p className="text-gray-400 text-sm">{skill.description}</p>
            </div>
        </div>
    );
};

export default SkillCard;
