export default function ProjectIntroduction({ project }: any) {
    return (
        <>
            {project[0]?.introduction && (
                <section className="container py-10">
                    <div className="grid items-center gap-10 grid-cols md:grid-cols-2">
                        <img
                            src={`${project && project[0].introduction.imgSrc}`}
                            alt=""
                        />

                        <div>
                            <p className="!mb-10 section-heading !text-left">
                                {project && project[0].introduction.name}
                            </p>
                            <p className="text-justify">
                                {project && project[0].introduction.desc}
                            </p>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
