/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination } from "swiper";
import Image from "next/image";
export default function ProjectCommunityCenter({ project }: any) {
  return (
    <>
      {project[0]?.communitiyCenter && (
        <section className="px-5 py-24 mx-auto lg:px-24 project-community-center">
          <div className="flex flex-wrap text-left">
            <div className="w-full md:w-4/4 lg:w-1/3 mb-[30px]">
              <div className="text-white lg:py-5 lg:px-[30px]">
                <p className="mb-6 lg:text-[40px] text-[20px] lg:text-start text-center font-bold">
                  {project && project[0].communitiyCenter.name}
                </p>
                <p className="lg:text-[16px] text-[14px] lg:text-start text-center ">
                  {project && project[0].communitiyCenter.desc}
                </p>
              </div>
            </div>
            <div className="w-full md:w-4/4 lg:w-2/3">
              <Swiper
                // cssMode={true}
                // autoplay={{
                //   delay: 2500,
                //   disableOnInteraction: false,
                // }}
                centeredSlides={true}
                grabCursor={true}
                effect={"creative"}
                pagination={{
                  type: "fraction",
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
              >
                {project &&
                  project[0].communitiyCenter.images?.map(
                    (item: any, index: any) => {
                      return (
                        <SwiperSlide key={index}>
                          <Image
                            src={item.imgSrc}
                            alt=""
                            height={730}
                            width={420}
                          />
                          {item.text && (
                            <div className="mt-[20px] text-white text-xl">
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
      )}
    </>
  );
}
