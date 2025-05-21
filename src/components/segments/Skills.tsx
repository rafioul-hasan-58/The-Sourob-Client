import { skills } from "../../../public/skillData";
import SkillCard from "../SkillCard";

const Skills = () => {
    return (
        <div className="lg:mt-5">
            <h1 className="lg:text-4xl font-bold text-center mb-7 text-white">Tech Stack</h1>
            <div className="grid grid-cols-4 lg:mx-[85px] gap-5">
                {skills.map((skill, index) => (
                    <SkillCard key={index} skill={skill} />
                ))}
            </div>
        </div>
    );
};

export default Skills;