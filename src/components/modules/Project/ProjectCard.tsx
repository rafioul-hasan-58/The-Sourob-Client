import { Button } from "@/components/ui/button";
import { IProject } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { format } from 'date-fns'

const ProjectCard = ({ project }: { project: IProject }) => {
    return (
        <div>
            <div className=" p-6 rounded-xl shadow-md hover:shadow-lg  duration-300 shrink border flex gap-3 bg-gradient-to-br from-[#3f0d75] via-[#5e2aa0] to-[#7e3ff2] hover:shadow-purple-500/40 hover:scale-[1.01] transition"
                style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
                <div className="w-[60%] rounded-xl overflow-hidden cursor-pointer">
                    <Link href={`/portfolio/${project._id}`}>
                        {
                            project?.images ? (<Image
                                width={300}
                                height={220}
                                src={project?.images[0]}
                                alt="image"
                                className="w-[300px] h-[220px] object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                            />) : null
                        }

                    </Link>
                </div>
                <div className="w-[45%]">
                    <p className="text-white text-xl font-semibold ">{project?.title}</p>
                    <p className=" text-xs text-gray-300 my-1">{project?.createdAt && format(new Date(project?.createdAt), 'dd, MMM, yyyy')}</p>
                    <p className="mt-2 text-[#e5e5e5]">{project.description.split(' ').slice(0, 8).join(' ')}...</p>
                    <Button className="mt-6 bg-white text-[#3f0d75] hover:bg-gray-100" style={{cursor:"pointer"}}>View More</Button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;