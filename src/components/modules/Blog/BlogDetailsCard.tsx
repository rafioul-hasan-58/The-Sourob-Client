'use client';
import { IBlog } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RxCross2 } from "react-icons/rx";
import { format } from 'date-fns'
const BlogDetailsCard = ({ blog }: { blog: IBlog }) => {
    const router = useRouter()
    const handleNavigate = () => {
        router.push('/')
    }
    return (
        <div className="flex justify-center items-center pt-20">
            <div className="mx-9  flex gap-8  p-12 rounded-lg bg-gray-800 shadow-lg">
                <div>
                    {blog?.images ? (
                        <Image
                            className="rounded-lg"
                            src={blog.images[0]}
                            alt="image"
                            height={330}
                            width={600}
                        />
                    ) : null}
                </div>
                <div className="flex-1">
                    <div className="flex justify-between relative">
                        <p className="text-xl  uppercase text-purple-500">blog</p>
                        <RxCross2 onClick={handleNavigate} className="absolute right-0 bottom-6 hover:bg-purple-500 hover:text-white text-lg p-2 text-purple-500 cursor-pointer w-11 h-11 rounded-full bg-white shadow-md" />
                    </div>
                    <h1 className="text-4xl font-semibold py-4 text-gray-200">{blog?.title}</h1>
                    <h1 className="text-xl text-gray-400 ">{blog?.description}</h1>
                    <div className="mt-4">
                        <div className="flex items-center">
                            <Image
                                className="object-cover h-10 border rounded-full"
                                src="https://i.ibb.co/FkmnwrCf/portfolio.jpg"
                                alt="Avatar"
                                width={40}
                                height={50}
                            />
                            <div className="text-left">
                                <h1 className="mx-2 font-semibold text-gray-400">Rafioul Hasan</h1>
                                <p className="mx-1 text-xs text-gray-500 ml-2">{blog?.createdAt && format(new Date(blog.createdAt), 'dd, MMM, yyyy')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailsCard;