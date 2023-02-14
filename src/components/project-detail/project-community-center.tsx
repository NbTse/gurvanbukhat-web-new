import { Carousel } from "react-responsive-carousel";

export default function ProjectCommunityCenter({ project }: any) {
    return (
        <>
            {project[0]?.communitiyCenter && (
                <section className="container py-10">
                    <div className="grid items-center grid-cols-1 gap-10 md:grid-cols-2">
                        <div>
                            <p className="!mb-10 section-heading !text-left">
                                {project && project[0].communitiyCenter.name}
                            </p>
                            <p className="text-justify">
                                {project && project[0].communitiyCenter.desc}
                            </p>
                        </div>

                        <Carousel autoPlay useKeyboardArrows swipeable={true}>
                            {project &&
                                project[0].communitiyCenter.images?.map(
                                    (item: any, index: any) => {
                                        return (
                                            <div key={index}>
                                                <img src={item.imgSrc} alt="" />
                                                {item.text && (
                                                    <div className="legend">
                                                        {item.text}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    }
                                )}
                        </Carousel>
                    </div>
                </section>
            )}
        </>
    );
}
