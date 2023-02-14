/* eslint-disable @next/next/no-img-element */
import { Carousel } from "react-responsive-carousel";

import Image from "next/image";

export default function ProjectRoom({ project }: any) {
    return (
        <>
            {project[0]?.room && (
                <section className="container">
                    <h4 className="section-heading">
                        ӨРӨӨНИЙ ЗОХИОН БАЙГУУЛАЛТ
                    </h4>

                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                        <div>
                            <img
                                src={project && project[0].room.img}
                                alt="room"
                            />
                        </div>
                        <Carousel autoPlay useKeyboardArrows swipeable={true}>
                            {project &&
                                project[0].room.images?.map(
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
                    </div>
                </section>
            )}
        </>
    );
}
