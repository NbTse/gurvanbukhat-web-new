import type { NextPage } from "next";
import { motion } from "framer-motion";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FcTimeline } from "react-icons/fc";

import CustomMotion from "@/components/common/custom-motion";

const CompanyIntro: NextPage = () => {
    return (
        <section className="container pt-32 pb-20 text-center pt">
            <CustomMotion>
                <h4 className="section-heading">Компаний танилцуулга</h4>

                <div className="grid gap-10 grid-cols md:grid-cols-2 mb-14">
                    <div>
                        <img src="/images/home/NEW-LOGO-alpha.gif" alt="" />
                    </div>
                    <div>
                        <p className="mb-6 text-justify">
                            Үндэсний бүтээн байгуулагч “Гурван Бухат” Групп 2009
                            онд үйл ажиллагааны үндэс сууриа тавьснаас хойш
                            өдгөө амжилттай өсөн тэлж, барилгын төслийн
                            удирдлага, менежмент, хөрөнгө оруулалт, үйлдвэрлэл
                            (бетон зуурмагийн үйлдвэр, хуванцар металл цонх
                            хаалга, тавилгын үйлдвэрлэл, цахилгаан, дулаан
                            хангамж, агаар сэлгэлтийн угсралт, үйлдвэрлэл) болон
                            гадаад, дотоод худалдаа зэрэг үндсэн дөрвөн
                            чиглэлээр үйл ажиллагаагаа эрчимтэй явуулж байна.
                        </p>
                        <p className="text-justify">
                            Бид Монгол улсын барилгын салбарт жишиг тогтоохуйц,
                            хүн-байгальд ээлтэй бодлого, төлөвлөлттэй, интерьер,
                            экстерьер, тохижилтын оновчтой, шинэлэг шийдэл бүхий
                            2100 гаруй айлыг орон сууцаар хангах 8 төслийг
                            хэрэгжүүлж, 1000 гаруй хүнийг ажлын байраар тогтмол
                            хангахын зэрэгцээ группийн 9 салбар компанид 170
                            гаруй чадварлаг мэргэжилтэн, архитектор, инженер
                            техникийн ажилтнууд нэгэн зорилго, нэгэн тэмүүллээр
                            хамтдаа хичээнгүйлэн ажиллаж байна.
                        </p>
                    </div>
                </div>
            </CustomMotion>

            <div className="grid gap-10 mb-14 grid-cols md:grid-cols-3">
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
                    <p className="text-stroke">1</p>
                    <p className="text-white text-[28px] mb-6 font-bold">
                        Эрхэм зорилго
                    </p>
                    <p className="text-justify">
                        Бид дэвшилэлтэд технологитой хөл нийлүүлэн алхаж,
                        судалгаа, хөгжүүлэлт, инженерчлэлийн оновчтой шийдэлд
                        тулгууралсан, хүн төвтэй хөгжлийг үйл ажиллагааныхаа цөм
                        болгон зардлыг хэмнэх замаар эрчим хүчний хэмнэлттэй,
                        байгальд ээлтэй байх зарчмыг нийгэмд төлөвшүүлэн,
                        улсынхаа хөгжил дэвшилд бодит хувь нэмэр оруулна.
                    </p>
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
                    <p className="text-stroke">2</p>
                    <p className="text-white text-[28px] mb-6 font-bold">
                        Алсын хараа
                    </p>
                    <p className="text-justify">
                        Тогтвортой хөгжлийг хадгалах замаар, дэлхийд жишигдэх
                        бүтээн байгуулалтыг цогцлоож, урт хугацааны чанар, үнэ
                        цэнийг үйлдвэрлэн, бүтээж, түгээн дэлгэрүүлнэ.
                    </p>
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
                    <p className="text-stroke">3</p>
                    <p className="text-white text-[28px] mb-6 font-bold">
                        Үнэт зүйлс
                    </p>
                    <div className="text-justify">
                        <div>Ёс зүй</div>
                        <div>Аюулгүй ажиллагаа</div>
                        <div>Хариуцлага</div>
                        <div>Дэвшилтэт технологи </div>
                        <div>Оновчтой инженерчлэл, төлөвлөлт</div>
                        <div>Тогтвортой хөгжил</div>
                    </div>
                </motion.div>
            </div>

            <h4 className="section-heading">Компаний түүх</h4>

            <VerticalTimeline>
                <VerticalTimelineElement
                    className=""
                    contentStyle={{
                        background: "#ffffff14",
                    }}
                    contentArrowStyle={{
                        borderRight: "10px solid #ffffff14",
                    }}
                    iconStyle={{
                        background: "#fff",
                    }}
                    icon={<FcTimeline />}
                >
                    <h2 className="mb-4 text-left !text-primary">2009</h2>
                    <h3 className="font-bold !text-xl text-left">Эхлэл</h3>
                    <p className="!text-lg text-left">
                        Худалдааны чиглэлээр үйл ажиллагааны үндэс сууриа тавив.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className=""
                    contentStyle={{
                        background: "#ffffff14",
                    }}
                    contentArrowStyle={{
                        borderRight: "10px solid #ffffff14",
                    }}
                    iconStyle={{
                        background: "#fff",
                    }}
                    icon={<FcTimeline />}
                >
                    <h2 className="mb-4 text-left !text-primary">2012</h2>
                    <h3 className="font-bold !text-xl text-left">
                        Анхны угсралт
                    </h3>
                    <p className="!text-lg text-left">
                        Эрчим хүч, дулаан хангамжийн тоног төхөөрөмжийн ханган
                        нийлүүлэлт, угсралт суурилуулалт хийж эхлэв. Дулаан,
                        цахилгаан тоног төхөөрөмжийн угсралтын тусгай зөвшөөрлөө
                        авч, анхны дулааны шугам угсралтыг амжилттай гүйцэтгэв.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className=""
                    contentStyle={{
                        background: "#ffffff14",
                    }}
                    contentArrowStyle={{
                        borderRight: "10px solid #ffffff14",
                    }}
                    iconStyle={{
                        background: "#fff",
                    }}
                    icon={<FcTimeline />}
                >
                    <h2 className="mb-4 text-left !text-primary">2014</h2>
                    <h3 className="font-bold !text-xl text-left">
                        Анхны барилга
                    </h3>
                    <p className="!text-lg text-left">
                        Барилга угсралтын чиглэлээр үйл ажиллагаагаа өргөжүүлэв.
                        Зоорийн давхартайгаа нийт 4 давхар үйлчилгээний барилга
                        барьж, хүлээлгэн өгөв.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className=""
                    contentStyle={{
                        background: "#ffffff14",
                    }}
                    contentArrowStyle={{
                        borderRight: "10px solid #ffffff14",
                    }}
                    iconStyle={{
                        background: "#fff",
                    }}
                    icon={<FcTimeline />}
                >
                    <h2 className="mb-4 text-left !text-primary">2014</h2>
                    <h3 className="font-bold !text-xl text-left">
                        Амжилттай түншлэл
                    </h3>
                    <p className="!text-lg text-left">
                        Скайвип констракшнтай түншлэлийн гэрээ байгуулж, үйл
                        ажиллагаагаа тэлэв.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className=""
                    contentStyle={{
                        background: "#ffffff14",
                    }}
                    contentArrowStyle={{
                        borderRight: "10px solid #ffffff14",
                    }}
                    iconStyle={{
                        background: "#fff",
                    }}
                    icon={<FcTimeline />}
                >
                    <h2 className="mb-4 text-left !text-primary">2015</h2>
                    <h3 className="font-bold !text-xl text-left">
                        Дистрибьютерийн эхлэл
                    </h3>
                    <p className="!text-lg text-left">
                        Дулааны тоног төхөөрөмжийн Danfoss брэндийн
                        дистрибьютерийн эрхийг анх удаа авч, олон улсын
                        харилцааны хөгжлийн суурь тавигдав.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className=""
                    contentStyle={{
                        background: "#ffffff14",
                    }}
                    contentArrowStyle={{
                        borderRight: "10px solid #ffffff14",
                    }}
                    iconStyle={{
                        background: "#fff",
                    }}
                    icon={<FcTimeline />}
                >
                    <h2 className="mb-4 text-left !text-primary">2018</h2>
                    <h3 className="font-bold !text-xl text-left">
                        Анхны төсөл
                    </h3>
                    <p className="!text-lg text-left">
                        Өмнөговь аймгийн төвд “Даланзадгад апартмент“ бие даасан
                        анхны төслөө амжилттай хэрэгжүүлэв. ХАМТАРСАН ТӨСЛҮҮД
                        Хамтарсан төслүүдийг амжилттай гүйцэтгэж, хүлээлгэн
                        өгөв. - Sky Residence 3 - Bayan-Burd Residence -
                        Dalanzadgad Apartment 2.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className=""
                    contentStyle={{
                        background: "#ffffff14",
                    }}
                    contentArrowStyle={{
                        borderRight: "10px solid #ffffff14",
                    }}
                    iconStyle={{
                        background: "#fff",
                    }}
                    icon={<FcTimeline />}
                >
                    <h2 className="mb-4 text-left !text-primary">2021</h2>
                    <h3 className="font-bold !text-xl text-left">
                        “Гурван Бухат” Групп үүсэн байгуулагдав
                    </h3>
                    <p className="!text-lg text-left">
                        Үйл ажиллагааны үндсэн 4 чиглэл, 160 үндсэн
                        ажилтантайгаар үйл ажиллагаагаа өргөжүүллээ.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </section>
    );
};

export default CompanyIntro;
