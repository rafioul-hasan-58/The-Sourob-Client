'use client';
import ProjectDetailsCard from "@/components/modules/Project/ProjectDetails";
import { getSingleProject } from "@/services/project";
import { IProject } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


const DetailsProject = () => {
    const { id } = useParams();
    const [data, setData] = useState<IProject>({} as IProject);
    useEffect(() => {
        const fetchedProject = async () => {
            const { data } = await getSingleProject(id);
            setData(data)
        }
        fetchedProject()
    }, [id])

    return (
        <div>
            <ProjectDetailsCard project={data} />
        </div>
    );
};

export default DetailsProject;