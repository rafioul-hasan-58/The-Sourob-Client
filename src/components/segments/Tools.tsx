import { tools } from "../../../public/skillData";
import SkillCard from "../SkillCard";

const Tools = () => {
    return (
        <div>
             <div className="lg:mt-5">
            <h1 className="lg:text-4xl font-bold text-center mb-7 text-white ">Tools</h1>
            <div className="grid grid-cols-4 lg:mx-[85px] gap-5">
                {tools.map((skill, index) => (
                    <SkillCard key={index} skill={skill} />
                ))}
            </div>
        </div>
        </div>
    );
};

export default Tools;