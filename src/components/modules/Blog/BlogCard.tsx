import { IBlog } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { format } from 'date-fns'
import { Button } from "@/components/ui/button";
const BlogCard = ({ blog }: { blog: IBlog }) => {
    // console.log(item);
    return (
        <div>
            <div className="bg-gray-800 text-white shadow-xl hover:shadow-lg transition-shadow duration-300 shrink p-4 rounded-xl"
                style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
                <Link href={`/blogs/${blog?._id}`}>
                    <div className=" rounded-xl overflow-hidden cursor-pointer">
                        {
                            blog?.images ? (<Image
                                width={500}
                                height={500}
                                src={blog.images[0]}
                                alt="image"
                                className=" h-[220px] object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                            />) : null
                        }
                    </div>
                </Link>
                <div>
                    <p className="text-white text-2xl font-semibold my-2">{blog.title.split(' ').slice(0, 3).join(' ')}...</p>
                    <p className=" text-xs text-gray-300 my-1">{blog?.createdAt && format(new Date(blog?.createdAt), 'dd, MMM, yyyy')}</p>
                    <Link href={`/blogs/details/${blog._id}`}>
                        <Button className="my-2.5 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white hover:from-purple-600 hover:to-purple-800 transition-all duration-300">
                            View More
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;


