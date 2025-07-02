import { FaArrowRight } from "react-icons/fa6";
import PFormInput from "../../shared/form/PFormInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Form } from "../../ui/form";
import PFormTextarea from "../../shared/form/PFormTextArea";
import { sendMessage } from "@/services/message";
import toast from "react-hot-toast";
const ConnectCard = () => {
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
            console.log(res);
            if (res.success) {
                toast.success(res.message);
                reset();
            } else {
                toast.error(res.errorSources[0].message)
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <div className="flex-1 bg-blue-900/30 rounded-lg p-6 h-[445px] border border-blue-900/60 hover:border-blue-900">
                <h1 className=" text-2xl font-semibold  text-white pb-4 ">Let’s Connect</h1>
                <Form {...form}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex gap-4 lg:pt-0 pt-4">
                            <div className="mb-4 flex-1">
                                <label className="block mb-2 text-sm text-white uppercase">Your Name</label>
                                <PFormInput
                                    name="name"
                                    placeholder=" Your Name"
                                    control={control}
                                    className="text-white border-gray-400"
                                />
                            </div>
                            <div className="mb-4 flex-1">
                                <label className="block mb-2 text-sm text-white uppercase">Address</label>
                                <PFormInput
                                    name="address"
                                    placeholder="Your Address"
                                    control={control}
                                    className="text-white rounded-sm border-gray-400"
                                />
                            </div>
                        </div>
                        <div className="flex gap-4 lg:pt-0 pt-4">
                            <div className="mb-4 flex-1">
                                <label className="block mb-2 text-sm text-white uppercase">Email</label>
                                <PFormInput
                                    name="email"
                                    placeholder="Your Email"
                                    control={control}
                                    className="text-white border-gray-400"
                                />
                            </div>
                            <div className="mb-4 flex-1">
                                <label className="block mb-2 text-sm text-white uppercase ">Subject</label>
                                <PFormInput
                                    name="subject"
                                    placeholder="Your Subject"
                                    control={control}
                                    className="text-white border-gray-400"
                                />
                            </div>
                        </div>
                        <div className="mb-4 flex-1">
                            <label className="block mb-2 text-sm text-white uppercase">Message</label>
                            <PFormTextarea
                                name="message"
                                placeholder="Your Message..."
                                control={control}
                                className="h-[100px] text-white border-gray-400"

                            />
                        </div>
                        <button type="submit" className="w-full flex items-center justify-center gap-1 cursor-pointer py-2 rounded-lg text-white transition-all duration-300 hover:-translate-y-1 bg-gradient-to-r from-purple-800 to-sky-700">
                            Send Message <span><FaArrowRight /></span>
                        </button>

                    </form>
                </Form>
            </div>
        </div>
    );
};

export default ConnectCard;