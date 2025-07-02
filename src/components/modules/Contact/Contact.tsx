'use client';

import ConnectCard from "./ConnectCard";
import ContactCard from "./ContactCard";

const Contact = () => {

    return (
        <div className="lg:mx-24  mx-2.5">
            <div className="text-center my-9">
                <p className="text-4xl font-bold mt-3 text-white">Have any Questions?</p>
                <p className=" my-1.5 text-gray-400">Let’s collaborate! Got an idea or project in mind? I’d love to hear about it. Just fill <br /> out the form below and let’s connect.</p>
            </div>
            <div className="flex gap-14 lg:flex-row flex-col">
                <aside>
                    <ContactCard />
                </aside>
                <aside className="flex-1">
                    <ConnectCard />
                </aside>
            </div>
        </div>
    );
};

export default Contact;