export default function ProjectChoose({ project }: any) {
    return (
        <>
            {project[0]?.choose && (
                <section className=" project-choose bg-[#ffffff14]">
                    <div className=" md:grid md:grid-cols-2 md:grid-rows-1">
                        <img
                            src={project && project[0].choose.imgSrc}
                            alt="choose"
                            className="object-cover w-full max-h-screen mb-[24px] lg:mb-[1px]  lg:px-0 lg:py-0 sm:px-[25px] sm:py-[20px]"
                        />

                        <div className="flex items-center">
                            <div className="lg:px-[90px] px-[20px]">
                                <p className="mb-6 lg:text-[40px] text-[20px] font-bold lg:text-start text-center text-white ">
                                    {project && project[0].choose.name}
                                </p>
                                <p className="lg:text-[16px] text-[14px] lg:text-start text-center text-[#ffffffa3] mb-[30px]">
                                    {project && project[0].choose.desc}
                                </p>

                                <div className="grid grid-cols-2 lg:grid-cols-2 lg:grid-rows-1">
                                    {project &&
                                        project[0].choose.reasons?.map(
                                            (item: any, index: any) => {
                                                return item.type % 2 == 0 ? (
                                                    <div
                                                        className="box-2"
                                                        key={index}
                                                    >
                                                        <p className="text-[#ffffffa3] ">
                                                            {item.name}
                                                        </p>
                                                        <p className="lg:text-[40px] text-[30px]  text-white">
                                                            {item.count}
                                                        </p>
                                                    </div>
                                                ) : (
                                                    <div
                                                        className="box-1"
                                                        key={index}
                                                    >
                                                        <p className="text-[#ffffffa3]">
                                                            {item.name}
                                                        </p>
                                                        <p className="lg:text-[40px] text-[30px] text-white">
                                                            {item.count}
                                                        </p>
                                                    </div>
                                                );
                                            }
                                        )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
