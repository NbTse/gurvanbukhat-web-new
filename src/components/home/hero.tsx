import CustomMotion from "@/components/common/custom-motion";
import { motion } from "framer-motion";

import AnimatedCharacters from "@/components/common/animated-characters";

const container = {
    visible: {
        transition: {
            staggerChildren: 0.025,
        },
    },
};

const placeholderText = [
    { type: "heading1", text: "Өндөр чанарыг Бодит үнээр" },
];

const Hero = () => {
    return (
        <section className="min-h-screen hero">
            <div className="flex-col px-6 hero-content lg:flex-row-reverse">
                <img src="/images/home/NEW-LOGO-alpha.gif" alt="" />

                <div>
                    <motion.div
                        initial="hidden"
                        animate={"visible"}
                        variants={container}
                    >
                        {placeholderText.map((item, index) => {
                            return <AnimatedCharacters {...item} key={index} />;
                        })}
                    </motion.div>

                    <CustomMotion>
                        <p className="py-12 text-2xl text-justify text-gray-300 lg:text-3xl">
                            “Гурван Бухат Групп” ХХК нь салбартаа 13 жилийн
                            туршлагатай Үндэсний бүтээн байгуулагч групп компани
                            юм.
                        </p>
                    </CustomMotion>
                </div>
            </div>
        </section>
    );
};

export default Hero;
