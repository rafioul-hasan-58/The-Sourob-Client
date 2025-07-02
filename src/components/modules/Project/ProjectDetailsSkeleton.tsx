const ProjectDetailsSkeleton = () => {
    return (
        <div className="lg:p-10 max-w-screen overflow-hidden bg-gray-900 dark:bg-gray-800 animate-pulse">
            <div className="flex lg:flex-row flex-col gap-4">
                <div className="w-full lg:h-[450px] bg-gray-700 rounded-md" />

                <div className="grid lg:grid-cols-1 grid-cols-3 gap-4 pt-4.5 my-0.5 lg:mx-0 mx-4">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="lg:w-[250px] w-[200px] h-[150px] bg-gray-700 rounded-md" />
                    ))}
                </div>
            </div>

            <div className="p-6">
                <div>
                    <div className="w-16 h-3 bg-blue-600 rounded-sm mb-2" />
                    <div className="w-64 h-6 bg-gray-700 rounded mb-4" />
                    <div className="w-full h-4 bg-gray-700 rounded mb-1" />
                    <div className="w-3/4 h-4 bg-gray-700 rounded mb-1" />
                    <div className="w-1/2 h-4 bg-gray-700 rounded" />
                </div>

                <div className="mt-6">
                    <div className="flex lg:flex-row flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-600" />
                            <div>
                                <div className="w-32 h-4 bg-gray-600 mb-1 rounded" />
                                <div className="w-24 h-3 bg-gray-600 rounded" />
                            </div>
                        </div>
                        <div className="flex gap-3 mt-4 lg:mt-0">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="h-10 w-28 bg-gray-700 rounded" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsSkeleton;
