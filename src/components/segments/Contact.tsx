'use client';
import { FaArrowRight } from "react-icons/fa6";
import ContactCard from "../modules/others/ContactCard";
import PFormInput from "../shared/form/PFormInput";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import PFormTextarea from "../shared/form/PFormTextArea";
const Contact = () => {
    const form = useForm();
    const { control } = form;
    return (
        <div className="lg:mx-24 pb-20">
            <div className="text-center my-9">
                <p className="text-4xl font-bold mt-3 text-white">Contact With Me</p>
            </div>
            <div className="flex gap-5">
                <div className="flex-1">
                    <ContactCard />
                </div>
                <div className="flex-1 bg-purple-950 rounded-lg p-6 h-[460px]">
                    <Form {...form}>
                        <form >
                            <div className="flex gap-4">
                                <div className="mb-4 flex-1">
                                    <label className="block mb-2 text-sm text-purple-600 uppercase">Your Name</label>                                    <PFormInput
                                        name="name"
                                        placeholder=" Your Name"
                                        control={control}
                                    />
                                </div>
                                <div className="mb-4 flex-1">
                                    <label className="block mb-2 text-sm text-purple-600 uppercase">Address</label>
                                    <PFormInput
                                        name="address"
                                        placeholder="Your Address"
                                        control={control}
                                    />
                                </div>
                            </div>
                            <div className="mb-4 flex-1">
                                <label className="block mb-2 text-sm text-purple-600 uppercase">Email</label>
                                <PFormInput
                                    name="email"
                                    placeholder="Your Email"
                                    control={control}
                                />
                            </div>
                            <div className="mb-4 flex-1">
                                <label className="block mb-2 text-sm text-purple-600 uppercase">Message</label>
                                <PFormTextarea
                                    name="message"
                                    placeholder="Message"
                                    control={control}
                                    className="h-[140px]"
                                />
                            </div>
                            <button className="w-full flex items-center justify-center gap-1 cursor-pointer py-3 rounded-lg text-white transition-all duration-300 hover:-translate-y-1 bg-gradient-to-r from-purple-700 to-purple-500">
                                Send Message <span><FaArrowRight /></span>
                            </button>

                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Contact;