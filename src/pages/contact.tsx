import type { NextPage } from "next";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

import CustomMotion from "@/components/common/custom-motion";
const MapWithNoSSR = dynamic(() => import("@/components/common/map"), {
    ssr: false,
});

const Contact: NextPage = () => {
    return (
        <section className="container pt-32 pb-20 text-center pt">
            <CustomMotion>
                <h4 className="section-heading">Холбоо барих</h4>
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
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
                        <img
                            src="/images/contact/4.png"
                            className="mx-auto mb-3"
                            alt=""
                        />
                        <p>
                            Баянзүрх дүүрэг, 25-р хороо, PLUS Residence, PLUS
                            center - 2 давхар
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
                        <a href="mailto:info@gb-group.mn">
                            <img
                                src="/images/contact/1.png"
                                className="mx-auto mb-3"
                                alt=""
                            />
                            <p>info@gb-group.mn</p>
                        </a>
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
                        <a href="tel://70007000">
                            <img
                                src="/images/contact/2.png"
                                className="mx-auto mb-3"
                                alt=""
                            />
                            <p>7000-7000</p>
                        </a>
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
                        <a
                            href="https://gb-group.mn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="/images/contact/3.png"
                                className="mx-auto mb-3"
                                alt=""
                            />
                            <p>https://gb-group.mn</p>
                        </a>
                    </motion.div>
                </div>

                <div className="grid gap-8 mt-20 grid-cols md:grid-cols-2">
                    <form method="POST">
                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg text-white label-text">
                                    Таны нэр
                                </span>
                            </label>
                            <input
                                required
                                type="text"
                                name="name"
                                className="input input-bordered input-primary input-ghost"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg text-white label-text">
                                    Имэйл хаяг
                                </span>
                            </label>
                            <input
                                required
                                type="email"
                                name="name"
                                className="input input-bordered input-primary input-ghost"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg text-white label-text">
                                    Санал хүсэлт
                                </span>
                            </label>
                            <textarea
                                required
                                name="message"
                                className="h-24 textarea textarea-bordered textarea-primary textarea-ghost"
                            ></textarea>
                        </div>

                        <div className="mt-6 form-control">
                            <button className="btn btn-primary" type="submit">
                                Илгээх
                            </button>
                        </div>
                    </form>

                    <MapWithNoSSR />
                </div>
            </CustomMotion>
        </section>
    );
};

export default Contact;
