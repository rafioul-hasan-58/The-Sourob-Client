'use client';
import Image from "next/image";
import { Typewriter } from 'react-simple-typewriter'
import { assets } from "@/assets";
import { IoMdCloudDownload } from "react-icons/io";
import { LuView } from "react-icons/lu";

const Banner = () => {

    return (
        <div className="lg:mx-24 lg:pt-28">
            <div className="flex lg:flex-row gap-3 flex-col-reverse items-center justify-between">
                <div className="lg:mx-0 mx-3">
                    <p className="uppercase text-gray-400 lg:mt-0 mt-3">w e l c o m e   <span className="mx-3">t o</span>  m y <span className="ml-2">w o r l d</span></p>
                    <h1 className="lg:text-6xl text-3xl font-bold mt-3">Hi, I’m <span className=" bg-gradient-to-r from-purple-500 to-sky-400 text-transparent bg-clip-text">
                        Rafioul Sourav
                    </span></h1>
                    <p className="lg:text-5xl text-3xl font-bold my-4">
                        <span className="text-purple-500 mx-2">a</span>
                        <Typewriter
                            words={['Team Member', 'Full Stack Developer.', 'Learner.']}
                            loop={-1}
                            typeSpeed={80}
                            deleteSpeed={80}
                            delaySpeed={1000}
                        />
                        <span className=" text-purple-500 ">|</span>
                    </p>
                    <p className="lg:w-[580px] py-4 lg:mx-0  text-gray-400 text-lg leading-9">Motivated and detail-oriented Full Stack Developer with hands-on experience in building scalable web applications using modern technologies like React, Next.js, Node.js, and MongoDB. Passionate about clean code, performance optimization, and solving real-world problems through full-stack solutions. </p>
                </div>
                <div className="lg:pt-0 md:pt-0 pt-20">
                    <Image src={assets.user_image} alt="" className="bg-gradient-to-r from-black  to-purple-900 lg:w-[420px] w-[400px] rounded-xl shadow-purple-500 shadow-md" />
                </div>
            </div>
            <div className="flex gap-4 lg:justify-start justify-center">
                <button className="bg-purple-800 opacity-80 p-2 rounded-sm cursor-pointer hover:opacity-100 flex items-center gap-0.5">Download resume<IoMdCloudDownload className="text-xl" /></button>
                <button className="cursor-pointer border p-2 flex items-center gap-1 border-purple-800 rounded-sm text-purple-500 opacity-90 hover:opacity-100">View resume <LuView className="text-xl" />
                </button>
            </div>
        </div>
    );
};

export default Banner;