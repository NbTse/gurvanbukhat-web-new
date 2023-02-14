import Image from "next/image";

export default function ProjectEquipment({ project }: any) {
  return (
    <>
      {project[0]?.equipment && (
        <section className="px-5 mx-auto lg:py-24 lg:px-24 branch-company">
          <div className="flex flex-col w-full my-6 text-center">
            <h2 className=" text-center text-white lg:text-[40px] text-[20px]  font-bold">
              ҮНДСЭН МАТЕРИАЛ ТОНОГЛОЛУУД
            </h2>
          </div>
          <div className="gap-[30px] md:grid md:grid-cols-4 md:grid-rows-1">
            {project &&
              project[0].equipment?.list?.map((item: any, index: any) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col  mb-8  p-[10px] items-center text-center"
                  >
                    <Image
                      src={item?.imgSrc}
                      alt="equipment"
                      width={201}
                      height={65}
                      className="mb-[10px]"
                    />

                    <p className="text-white text-[14px]">{item?.name}</p>
                  </div>
                );
              })}
          </div>
        </section>
      )}
    </>
  );
}
