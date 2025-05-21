import { getAllBlogs } from "@/services/blog";
import { IBlog } from "@/types";
import BlogCard from "../modules/Blog/BlogCard";
import { Button } from "../ui/button";

const MyBlogs = async () => {
    const { data } = await getAllBlogs();
    console.log(data);
    return (
        <div className="lg:mx-[80px]">
            <h1 className="text-white text-4xl font-bold text-center my-8">My Blogs</h1>
            <div className="grid grid-cols-3 gap-5">
                {
                    data?.map((blog: IBlog, index: number) => (
                        <BlogCard key={index} blog={blog} />
                    ))
                }
            </div>
            <div className="flex justify-center mt-5 ">
                <Button className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full hover:bg-purple-600 cursor-pointer p-5">See More Blog</Button>
            </div>
        </div>
    );
};

export default MyBlogs;