'use server';

import { FieldValues } from "react-hook-form";

export const sendMessage = async (blogData: FieldValues) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/messages/send-message`,
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    //   Authorization: (await cookies()).get("accessToken")!.value,
                },
                body: JSON.stringify(blogData),
            }
        );
        const result = await res.json();
        return result;
    } catch (error) {
        return Error(error as string);
    }
};