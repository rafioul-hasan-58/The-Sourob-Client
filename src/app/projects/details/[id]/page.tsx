'use client';

import ProjectDetailsCard from "@/components/modules/Project/ProjectDetails";
import ProjectDetailsSkeleton from "@/components/modules/Project/ProjectDetailsSkeleton";
import { getSingleProject } from "@/services/project";
import { IProject } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const DetailsProject = () => {
  const { id } = useParams();
  const [data, setData] = useState<IProject | null>(null);
  const [loading, setLoading] = useState(true); // Added
  const [error, setError] = useState<string | null>(null); // Added

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const response = await getSingleProject(id);
        if ("data" in response) {
          setData(response.data);
        } else {
          setError("Project not found");
        }
      } catch {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProject();
    }
  }, [id]);

  if (loading) return <div className="text-center py-10">Loading project...</div>;
  if (error) return <div className="text-center text-red-500 py-10">{error}</div>;

  return (
    <div>
      {loading ? (
        <ProjectDetailsSkeleton />
      ) : (
        data && <ProjectDetailsCard project={data} />
      )}
    </div>
  );
};

export default DetailsProject;
