import { tools } from "./skillData";
import SkillCard from "./SkillCard";


const Tools = () => {
    return (
        <div>
            <div className="mt-5 mx-2">
                <h1 className="lg:text-4xl text-3xl font-bold text-center mb-7 text-white ">Tools</h1>
                <div className="grid lg:grid-cols-4 grid-cols-2 lg:mx-[85px] gap-5">
                    {tools.map((skill, index) => (
                        <SkillCard key={index} skill={skill} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tools;