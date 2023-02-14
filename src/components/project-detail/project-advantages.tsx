/* eslint-disable @next/next/no-img-element */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper";
import Image from "next/image";

export default function ProjectAdvantages({ project }: any) {
    return (
        project[0] &&
        project[0].advantages && (
            <section className="px-5 py-24 lg:px-24 project-advantages">
                <div className="flex flex-wrap text-left">
                    <div className="w-full px-4 md:w-4/4 lg:w-1/4">
                        <div className="text-white lg:py-5 lg:px-[30px]">
                            <p className="mb-[10px] lg:text-[40px] text-[20px] lg:text-start text-center">
                                {project && project[0].advantages.name}
                            </p>
                            <p className="text-[14px] lg:text-start text-center">
                                {project && project[0].advantages.desc}
                            </p>
                        </div>
                    </div>
                    <div className="relative w-full px-4 mt-5 md:w-4/4 lg:w-3/4">
                        <div className="swiper-button image-swiper-button-next">
                            <Image
                                src="/images/projects/icons/right-button.svg"
                                width={48}
                                height={48}
                                alt="right"
                            />
                        </div>
                        <div className="swiper-button image-swiper-button-prev">
                            <Image
                                src="/images/projects/icons/left-button.svg"
                                width={48}
                                height={48}
                                alt="left"
                            />
                        </div>
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={30}
                            modules={[Navigation]}
                            className="mySwiper"
                            cssMode={true}
                            navigation={{
                                nextEl: ".image-swiper-button-next",
                                prevEl: ".image-swiper-button-prev",
                                disabledClass: "swiper-button-disabled",
                            }}
                            grabCursor={true}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                },
                            }}
                        >
                            {project &&
                                project[0].advantages.images?.map(
                                    (item: any, index: any) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <img
                                                    src={item.imgSrc}
                                                    alt="advantages"
                                                />
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
