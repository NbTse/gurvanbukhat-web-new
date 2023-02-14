import CustomMotion from "@/components/common/custom-motion";

export default function ProjectContact({ project }: any) {
    return (
        <>
            {project[0]?.contact && (
                <section className="container">
                    <CustomMotion>
                        <div className="shadow-box">
                            <div className="flex flex-col items-center justify-center mx-5">
                                <h4 className="section-heading">
                                    {project && project[0].contact.name}
                                </h4>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div className="mx-auto">
                                        <a
                                            href={
                                                project &&
                                                project[0].hero.social
                                            }
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
                                    </div>

                                    <div className="mx-auto">
                                        <a
                                            href={`tel://${project[0].contact.number}`}
                                        >
                                            <button className="btn btn-primary">
                                                <img
                                                    src="/images/project/icons/contact.svg"
                                                    alt="contact"
                                                    className="mr-2"
                                                />
                                                {project &&
                                                    project[0].hero.contact}
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CustomMotion>
                </section>
            )}
        </>
    );
}
