import Image from "next/image";
import { format } from 'date-fns'
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Link } from "lucide-react";
import { IProject } from "@/types";
interface DetailProject {
    project: IProject
}
const ProjectDetails = ({ project }: DetailProject) => {
    const fallbackImage = 'https://i.ibb.co/mryzXPbL/office-605503-1280.jpg';
    const [currentImg, setCurrentImg] = useState(project?.images && project.images[0]);

    useEffect(() => {
        if (project?.images?.length > 0) {
            setCurrentImg(project.images[0]);
        } else {
            setCurrentImg(fallbackImage)
        }
    }, [project?.images])
    return (
        <div className="lg:p-10 max-w-screen overflow-hidden bg-gray-900 dark:bg-gray-800">
            <div className="flex lg:flex-row flex-col">
                {currentImg ? (
                    <Image
                        className=" w-full lg:h-[450px] p-4.5"
                        src={currentImg}
                        width={600}
                        height={300}
                        alt="image"
                    />
                ) : (
                    <div className="w-[100px] h-[80px] flex items-center justify-center bg-gray-200 text-gray-500 border rounded">
                        No Image
                    </div>
                )}
                <div className="grid lg:grid-cols-1 grid-cols-3 pt-4.5 my-0.5 lg:mx-0 mx-4">
                    {
                        project?.images?.length > 0 && project.images.slice(0).map((img, idx) => (<Image key={idx} src={img} alt={img + idx} width={250} height={200} onClick={() => setCurrentImg(img)} className={`lg:w-[250px] w-[200px] ${currentImg === img ? 'border-2 border-purple-500' : ''}`} />))
                    }
                </div>
            </div>
            <div className="p-6">
                <div>
                    <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                        Project
                    </span>
                    <a
                        href="#"
                        className="block mt-2 text-xl font-semibold text-gray-300 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                    >
                        {project.title}
                    </a>
                    <p className="mt-2 text-sm text-gray-400 dark:text-gray-400">
                        <span className="font-semibold">Description:</span>{project.description}
                    </p>
                </div>

                <div className="mt-4">
                    <div className="flex items-center">

                        <div className="flex lg:flex-row flex-col gap-3">
                            <div className="flex items-center">
                                <Image
                                    className="object-cover h-10 rounded-full"
                                    src="https://i.ibb.co/1JPrQPQh/portfolio.jpg"
                                    alt="Avatar"
                                    width={40}
                                    height={50}
                                />
                              <div>
                                  <h1 className="mx-2 font-semibold text-gray-400">Rafioul Hasan</h1>
                                <p className="mx-1 text-xs text-gray-500 ml-2">{project?.createdAt && format(new Date(project.createdAt), 'dd, MMM, yyyy')}</p>
                              </div>
                            </div>
                            <div className="flex gap-3 mt-2">
                                <Button onClick={() => window.open(`${project.github_link_client}`)} className="rounded-none  border">View Client <Github className="" /></Button>
                                <Button onClick={() => window.open(`${project.github_link_server}`)} className="rounded-none  border">View Server <Github className="" /></Button>
                                <Button onClick={() => window.open(`${project.live_link}`, "_blank")} className="rounded-none bg-blue-500 hover:bg-blue-600">See Live <Link /></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;