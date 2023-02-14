import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

export default function ProjectAdvantages({ project }: any) {
    return (
        project[0] &&
        project[0].advantages && (
            <section className="container py-10">
                <div className="grid items-center gap-10 grid-cols md:grid-cols-2">
                    <div>
                        <p className="!mb-10 section-heading !text-left">
                            {project && project[0].advantages.name}
                        </p>
                        <p className="text-justify">
                            {project && project[0].advantages.desc}
                        </p>
                    </div>

                    <div className="relative overflow-hidden">
                        <div className="swiper-button image-swiper-button-next">
                            <img
                                src="/images/project/icons/right-button.svg"
                                alt="right"
                            />
                        </div>
                        <div className="swiper-button image-swiper-button-prev">
                            <img
                                src="/images/project/icons/left-button.svg"
                                alt="left"
                            />
                        </div>

                        <Swiper
                            slidesPerView={2}
                            spaceBetween={30}
                            modules={[Navigation]}
                            cssMode={true}
                            navigation={{
                                nextEl: ".image-swiper-button-next",
                                prevEl: ".image-swiper-button-prev",
                                disabledClass: "swiper-button-disabled",
                            }}
                            grabCursor={true}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                1280: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            {project &&
                                project[0].advantages.images?.map(
                                    (item: any, index: any) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <img src={item.imgSrc} alt="" />
                                                {item.text && (
                                                    <div className="mt-2 text-center">
                                                        {item.text}
                                                    </div>
                                                )}
                                            </SwiperSlide>
                                        );
                                    }
                                )}
                        </Swiper>
                    </div>
                </div>
            </section>
        )
    );
}
