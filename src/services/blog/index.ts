'use server';

import { ParamValue } from "next/dist/server/request/params";


export const getAllBlogs = async () => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/get-all-blogs`,
            {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                },
            }
        );
        const result = await res.json();
        return result;
    } catch (error) {
        return Error(error as string);
    }
};
export const getSingleBlog = async (id: ParamValue) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/get-single-blog/${id}`,
            {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                },
            }
        );
        const result = await res.json();
        return result;
    } catch (error) {
        return Error(error as string);
    }
};