'use server'

import { ParamValue } from "next/dist/server/request/params";

export const getAllProjects = async () => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/projects/get-all-projects`,
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
export const getSingleProject = async (id: ParamValue) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/projects/get-single-project/${id}`,
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