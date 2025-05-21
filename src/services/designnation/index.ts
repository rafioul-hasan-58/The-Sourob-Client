


export const getAllSkills = async () => {
    try {
        const res = await fetch('skillData.json');
        const result = await res.json();
        return result;
    } catch (error) {
        return Error(error as string);
    }
};