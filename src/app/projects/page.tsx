import ProjectCard from "@/components/modules/Project/ProjectCard";
import { Button } from "@/components/ui/button";
import { getAllProjects } from "@/services/project";
import { IProject } from "@/types";

const MyProjects = async () => {
    const { data } = await getAllProjects();
return (
        <div className="lg:mx-[80px] mt-10 mx-2">
            <h1 className="text-white text-4xl font-bold text-center mb-8">My Works</h1>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-7">
                {
                    data?.map((project: IProject, index: number) => (
                        <ProjectCard key={index} project={project} />
                    ))
                }
            </div>
            <div className="flex justify-center mt-5 ">
                <Button className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full hover:bg-purple-600 cursor-pointer p-5">See More Project</Button>
            </div>
        </div>
    );
};

export default MyProjects;