export default function ProjectChoose({ project }: any) {
    return (
        <>
            {project[0]?.choose && (
                <section className="container my-10">
                    <div className="grid items-center content-start grid-rows-1 gap-10 md:grid-cols-2 bg-[#ffffff14]">
                        <img
                            src={project && project[0].choose.imgSrc}
                            alt=""
                            className=""
                        />

                        <div>
                            <p className="!mb-10 section-heading !text-left">
                                {project && project[0].choose.name}
                            </p>
                            <p className="mb-10 text-justify">
                                {project && project[0].choose.desc}
                            </p>

                            <div className="grid grid-cols-2">
                                {project &&
                                    project[0].choose.reasons?.map(
                                        (item: any, index: any) => {
                                            return item.type % 2 == 0 ? (
                                                <div
                                                    className="box-2"
                                                    key={index}
                                                >
                                                    <p className="text-[#ffffffa3] mb-5">
                                                        {item.name}
                                                    </p>
                                                    <p className="lg:text-[40px] text-[30px] text-white">
                                                        {item.count}
                                                    </p>
                                                </div>
                                            ) : (
                                                <div
                                                    className="box-1"
                                                    key={index}
                                                >
                                                    <p className="text-[#ffffffa3] mb-5">
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
                </section>
            )}
        </>
    );
}
