import type { NextPage } from "next";
import { motion } from "framer-motion";

import CustomCard from "@/components/common/custom-card";
import Company from "@/components/home/company";

import CustomMotion from "@/components/common/custom-motion";

const Contact: NextPage = () => {
    return (
        <>
            <section className="container min-h-screen hero pt-[120px] lg:pt-0">
                <CustomMotion>
                    <h4 className="section-heading">
                        Ерөнхий захирлын мэндчилгээ
                    </h4>

                    <div className="flex flex-col gap-10 md:flex-row">
                        <div className="w-full md:w-2/3 lg:w-1/3">
                            <img
                                src="/images/about/general-director.png"
                                alt="general-director"
                            />
                        </div>

                        <div className="flex flex-col w-full md:w-2/3 lg:w-2/3">
                            <h2 className="text-white text-3xl mb-[15px] text-left">
                                Т.Ганчимэг
                            </h2>
                            <p className="text-lg text-white mb-[10px] text-left">
                                Гурван Бухат Группийн Ерөнхий захирал
                            </p>
                            <p className="text-[#ffffffa3] text-justify">
                                Эрхэм хүндэт харилцагч, хамтран ажиллагч та
                                бүхэндээ “Гурван бухат групп” ХХК-ийн нийт хамт
                                олны өмнөөс мэндчилж байна. Гурван бухат групп
                                нь улсын хөгжлийг тодорхойлогч, эдийн засгийн
                                гол хөшүүрэг болсон барилга бүтээн байгуулалт,
                                үл хөдлөх хөрөнгийн салбарт үйл ажиллагаа явуулж
                                эхлээд хэдийн 13 жил өнгөрөөд байна. Өнгөрсөн
                                хугацаанд бид судалгаанд суурилсан үйлдвэрлэл,
                                үйлдвэрлэлээс угтай бүтээн байгуулалт, бүтээн
                                байгуулалт суурьтай хөрөнгө оруулалт, худалдаа
                                гэсэн үе шаттайгаар, чанартай болон хүртээмжтэй
                                үйлчилгээг хэрэглэгчдэдээ санал болгож байна.
                                Өдрөөс өдөрт хувьсан өөрчлөгдөж буй зах зээлийн
                                орчинд бид инновацилаг, инженерчлэлийн оновчтой
                                шийдэл, хүн төвтэй хөгжлийг үйл ажиллагааныхаа
                                цөм болгож, дэлхийн жишигт нийцсэн, дэвшилтэт
                                техник технологи, инженерчлэлийн оновчтой шийдэл
                                бүхий тогтвортой хөгжлийг дэмжсэн бүтээн
                                байгуулалтаар Монгол хүний амьдрах орчныг
                                сайжруулан, бодит үнэ цэнийг бий болгох эрхэм
                                зорилго тавин ажиллаж байна.
                            </p>
                        </div>
                    </div>
                </CustomMotion>
            </section>

            <section className="container pb-20 text-center pt">
                <h4 className="mt-16 section-heading">Удирдлагын баг</h4>

                <div className="grid grid-cols-2 gap-8 row-start md:grid-cols-3 lg:grid-cols-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <CustomCard
                            name="М.Гантулга"
                            subname="ТУЗ-ийн дарга"
                            imgSrc="/images/about/1.png"
                        />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <CustomCard
                            name="О.Ганхөлөг"
                            subname="Үйлдвэрлэл эрхэлсэн захирал"
                            imgSrc="/images/about/2.png"
                        />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <CustomCard
                            name="Э.Билэгт"
                            subname="Үйл ажиллагаа хариуцсан захирал"
                            imgSrc="/images/about/3.png"
                        />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <CustomCard
                            name="Жаргалмаа"
                            subname="Санхүү эрхэлсэн захирал"
                            imgSrc="/images/about/4.png"
                        />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <CustomCard
                            name="Хандсүрэн"
                            subname=" Борлуулалтын албаны дарга"
                            imgSrc="/images/about/5.png"
                        />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <CustomCard
                            name="Батгэрэл"
                            subname="Захиргаа, хүний нөөцийн газрын захирал"
                            imgSrc="/images/about/6.png"
                        />
                    </motion.div>
                </div>

                <Company />
            </section>
        </>
    );
};

export default Contact;
