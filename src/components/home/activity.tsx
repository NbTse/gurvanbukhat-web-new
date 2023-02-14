import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const image = {
    hidden: { opacity: 0, y: -15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.15,
            type: "spring",
            damping: 100,
            mass: 4,
        },
    },
};

// Define paragraph animations
const paragraph = {
    hidden: { opacity: 0, y: -15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.3,
            type: "spring",
            damping: 100,
            mass: 4,
        },
    },
};

const Activity = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
        // triggerOnce: true
    });
    const [ref2, inView2] = useInView({
        threshold: 0.5,
        // triggerOnce: true
    });
    const [ref3, inView3] = useInView({
        threshold: 0.5,
        // triggerOnce: true
    });
    const [ref4, inView4] = useInView({
        threshold: 0.5,
        // triggerOnce: true
    });

    return (
        <section className="container pt-20 text-center">
            <h4 className="section-heading">Үйл ажиллагааны чиглэл</h4>

            <div>
                <motion.section
                    ref={ref}
                    // Set initial state to key "hidden"
                    initial="hidden"
                    // Toggle between "visible" and "hidden" keys when inView is true
                    // These key names are passed down to child motion elements
                    animate={inView ? "visible" : "hidden"}
                    className="grid items-center gap-10 sm:mb-20 grid-cols sm:grid-cols-2"
                >
                    <motion.div variants={image}>
                        <img
                            src="/images/activity/1.png"
                            alt=""
                            className="max-w-[200px] md:px-10 lg:px-20 sm:max-w-full"
                        />
                    </motion.div>
                    <motion.div variants={paragraph}>
                        <div className="mb-10">
                            <h2 className="!mb-6 section-heading !text-left">
                                Хөрөнгө оруулалт
                            </h2>
                            <ul className="text-2xl text-left text-[#B2B2B2]">
                                <li>
                                    Барилга угсралтын төслийн хөрөнгө оруулалт
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </motion.section>

                <motion.section
                    ref={ref2}
                    // Set initial state to key "hidden"
                    initial="hidden"
                    // Toggle between "visible" and "hidden" keys when inView is true
                    // These key names are passed down to child motion elements
                    animate={inView2 ? "visible" : "hidden"}
                    className="grid items-center gap-10 sm:mb-20 grid-cols sm:grid-cols-2"
                >
                    <motion.div variants={image} className="block sm:hidden">
                        <img
                            src="/images/activity/2.png"
                            alt=""
                            className="max-w-[200px] md:px-10 lg:px-20 sm:max-w-full"
                        />
                    </motion.div>
                    <motion.div variants={paragraph}>
                        <div className="mb-10">
                            <h2 className="!mb-6 section-heading !text-left sm:!text-right">
                                Барилгын стратеги, менежмент
                            </h2>
                            <ul className="text-2xl text-left sm:text-right text-[#B2B2B2]">
                                <li>Барилгын төслийн удирдлага</li>
                                <li>Менежмент</li>
                            </ul>
                        </div>
                    </motion.div>
                    <motion.div variants={image}>
                        <img
                            src="/images/activity/2.png"
                            alt=""
                            className="hidden md:px-10 lg:px-20 sm:block"
                        />
                    </motion.div>
                </motion.section>

                <motion.section
                    ref={ref3}
                    // Set initial state to key "hidden"
                    initial="hidden"
                    // Toggle between "visible" and "hidden" keys when inView is true
                    // These key names are passed down to child motion elements
                    animate={inView3 ? "visible" : "hidden"}
                    className="grid items-center gap-10 sm:mb-20 grid-cols sm:grid-cols-2"
                >
                    <motion.div variants={image}>
                        <img
                            src="/images/activity/3.png"
                            alt=""
                            className="max-w-[200px] md:px-10 lg:px-20 sm:max-w-full"
                        />
                    </motion.div>
                    <motion.div variants={paragraph}>
                        <div className="mb-10">
                            <h2 className="!mb-6 section-heading !text-left">
                                Үйлдвэрлэл, үйлчилгээ
                            </h2>
                            <ul className="text-2xl text-left text-[#B2B2B2]">
                                <li>Барилгын төслийн удирдлага</li>
                                <li>Менежмент</li>
                                <li>Дулаан хангамж</li>
                                <li>
                                    Агаар сэлгэлтийн тоног төхөөрөмжийн
                                    үйлдвэрлэл, угсралт
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </motion.section>

                <motion.section
                    ref={ref4}
                    // Set initial state to key "hidden"
                    initial="hidden"
                    // Toggle between "visible" and "hidden" keys when inView is true
                    // These key names are passed down to child motion elements
                    animate={inView4 ? "visible" : "hidden"}
                    className="grid items-center gap-10 sm:mb-20 grid-cols sm:grid-cols-2"
                >
                    <motion.div variants={image} className="block sm:hidden">
                        <img
                            src="/images/activity/4.png"
                            alt=""
                            className="max-w-[200px] md:px-10 lg:px-20 sm:max-w-full"
                        />
                    </motion.div>
                    <motion.div variants={paragraph}>
                        <div className="mb-10">
                            <h2 className="!mb-6 section-heading !text-left sm:!text-right">
                                Худалдаа
                            </h2>
                            <ul className="text-2xl text-left sm:text-right text-[#B2B2B2]">
                                <li>Барилгын материалын импорт, худалдаа</li>
                            </ul>
                        </div>
                    </motion.div>
                    <motion.div variants={image}>
                        <img
                            src="/images/activity/4.png"
                            alt=""
                            className="hidden md:px-10 lg:px-20 sm:block"
                        />
                    </motion.div>
                </motion.section>
            </div>
        </section>
    );
};

export default Activity;
