import Image from "next/image";

const AboutMe = () => {
    return (
        <div>
            <h1 className="text-4xl text-white mb-5 text-center font-bold mt-10">About Me</h1>
            <div className="lg:mx-[85px] mx-4 mt-10 flex lg:flex-row flex-col-reverse lg:gap-16">
                <div className="lg:w-[70%] w-full">
                    <p className="text-white text-2xl font-semibold my-4">What I usually do</p>
                    <p className="text-white text-lg">
                        Hi, I’m Rafioul Hasan Sourob  — a passionate Full Stack Developer crafting modern, scalable, and meaningful web experiences. From intuitive UI designs with React, Next.js, Tailwind, and ShadCN to powerful backend architectures with Node.js, Express, MongoDB, and PostgreSQL, I love building solutions that solve real-world problems. I collaborate with real users, explore clean UI/UX with Figma, automate workflows with Docker, and keep my workflow efficient using VS Code, GitHub, and Postman. My journey is fueled by curiosity, community, and a clear goal: build smart, human-centered software that lasts.

                        Let’s build something impactful.
                    </p>
                    <p className="text-white text-2xl font-semibold mt-3">What is my goal </p>
                    <p className="text-white text-lg pt-4">My goal is To build useful, user-friendly, and scalable web applications that solve real-world problems and help people in their daily lives.</p>
                </div>
                <div className="lg:w-[30%] mt-3">
                    <Image src="https://i.ibb.co/qFWR47ck/s2port-removebg-preview.png" alt="image" className="bg-gradient-to-r from-black  to-purple-900 lg:w-[420px] w-[400px] rounded-xl shadow-purple-500 shadow-md" width={400} height={350} />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;