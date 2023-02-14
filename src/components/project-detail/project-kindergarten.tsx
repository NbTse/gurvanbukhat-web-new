import { Carousel } from "react-responsive-carousel";

export default function ProjectKindergarten({ project }: any) {
    return (
        <>
            {project[0]?.kindergarten && (
                <section className="container py-10">
                    <div className="grid items-center grid-cols-1 gap-10 md:grid-cols-2">
                        <Carousel autoPlay useKeyboardArrows swipeable={true}>
                            {project &&
                                project[0].kindergarten.images?.map(
                                    (item: any, index: any) => {
                                        return (
                                            <img
                                                src={item.imgSrc}
                                                alt=""
                                                key={index}
                                            />
                                        );
                                    }
                                )}
                        </Carousel>

                        <div>
                            <p className="!mb-10 section-heading !text-left">
                                {project && project[0].kindergarten.name}
                            </p>
                            <p className="text-justify">
                                {project && project[0].kindergarten.desc}
                            </p>
                            <ul className="">
                                {project &&
                                    project[0].kindergarten.list?.map(
                                        (item: any, index: any) => {
                                            return (
                                                <li key={index}>{item.name}</li>
                                            );
                                        }
                                    )}
                            </ul>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
