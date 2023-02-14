export default function ProjectMobileHero({ project, children }: any) {
    return (
        <section className="mobile lg:hidden relative flex items-center justify-center h-[32rem] overflow-hidden">
            <div className="z-30 flex items-center justify-center w-full h-full px-4 2xl:px-40 md:px-8">
                <div className="flex flex-col items-center py-16 mx-auto text-center ">
                    <h1 className="lg:text-[28px] text-[16px] leading-none  text-white font-bold">
                        {project && project[0].hero.name}
                    </h1>
                    <p className="mt-8 mb-12 lg:text-[56px] text-[20px] text-white font-bold">
                        {project && project[0].hero.title}
                    </p>
                    <div className="grid grid-cols-1 gap-4">
                        <a
                            href={project && project[0].hero.social}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button className="btn btn-outline btn-primary">
                                <img
                                    src="/images/project/icons/message.svg"
                                    alt="contact"
                                    className="mr-2"
                                />
                                Холбоо барих
                            </button>
                        </a>

                        <a href={`tel://${project[0].contact.number}`}>
                            <button className="btn btn-primary">
                                <img
                                    src="/images/project/icons/contact.svg"
                                    alt="contact"
                                    className="mr-2"
                                />
                                {project && project[0].hero.contact}
                            </button>
                        </a>
                    </div>
                    <div>{children}</div>
                </div>
            </div>
            <video
                autoPlay
                loop
                muted
                className="absolute z-10 w-auto max-w-none"
            >
                <source src={project[0].hero.videoSrc} type="video/mp4" />
            </video>
        </section>
    );
}
