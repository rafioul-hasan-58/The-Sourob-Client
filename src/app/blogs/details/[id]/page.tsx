'use client';
import BlogDetailsCard from "@/components/modules/Blog/BlogDetailsCard";
import { getSingleBlog } from "@/services/blog";
import { IBlog } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


const DetailsBlog = () => {
    const { id } = useParams();
    const [data, setData] = useState<IBlog>({} as IBlog);
    useEffect(() => {
        const fetchedBlog = async () => {
            const { data } = await getSingleBlog(id);
            setData(data)
        }
        fetchedBlog()
    }, [id])

    return (
        <div>
            <BlogDetailsCard blog={data} />
        </div>
    );
};

export default DetailsBlog;