'use client';
import { FaArrowRight } from "react-icons/fa6";
import ContactCard from "../modules/others/ContactCard";
import PFormInput from "../shared/form/PFormInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Form } from "../ui/form";
import PFormTextarea from "../shared/form/PFormTextArea";
import { sendMessage } from "@/services/message";
import toast from "react-hot-toast";
const Contact = () => {
    const form = useForm({
        defaultValues: {
            name: '',
            email: '',
            address: '',
            subject: '',
            message: ''
        }
    });
    const { control, handleSubmit, reset } = form;

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {

        try {
            const res = await sendMessage(data);
            if (res.success) {
                toast.success(res.message);
                reset();
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="lg:mx-24 lg:pb-20 mx-2.5">
            <div className="text-center my-9">
                <p className="text-4xl font-bold mt-3 text-white">Contact With Me</p>
            </div>
            <div className="flex gap-5 lg:flex-row flex-col">
                <div className="">
                    <ContactCard />
                </div>
                <div className="flex-1 bg-purple-950 rounded-lg p-6 h-[520px]">
                    <h1 className="lg:hidden text-2xl font-semibold text-center text-purple-600 pb-4 border-b-2 border-white">Send Message</h1>
                    <Form {...form}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex gap-4 lg:pt-0 pt-4">
                                <div className="mb-4 flex-1">
                                    <label className="block mb-2 text-sm text-white uppercase">Your Name</label>
                                    <PFormInput
                                        name="name"
                                        placeholder=" Your Name"
                                        control={control}
                                    />
                                </div>
                                <div className="mb-4 flex-1">
                                    <label className="block mb-2 text-sm text-white uppercase">Address</label>
                                    <PFormInput
                                        name="address"
                                        placeholder="Your Address"
                                        control={control}
                                    />
                                </div>
                            </div>
                            <div className="mb-4 flex-1">
                                <label className="block mb-2 text-sm text-white uppercase">Email</label>
                                <PFormInput
                                    name="email"
                                    placeholder="Your Email"
                                    control={control}
                                />
                            </div>
                            <div className="mb-4 flex-1">
                                <label className="block mb-2 text-sm text-white uppercase">Subject</label>
                                <PFormInput
                                    name="subject"
                                    placeholder="Subject"
                                    control={control}
                                />
                            </div>
                            <div className="mb-4 flex-1">
                                <label className="block mb-2 text-sm text-white uppercase">Message</label>
                                <PFormTextarea
                                    name="message"
                                    placeholder="Message"
                                    control={control}
                                    className="h-[140px]"
                                />
                            </div>
                            <button type="submit" className="w-full flex items-center justify-center gap-1 cursor-pointer py-3 rounded-lg text-white transition-all duration-300 hover:-translate-y-1 bg-gradient-to-r from-purple-700 to-purple-500">
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