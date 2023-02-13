import CustomMotion from "@/components/common/custom-motion";

const Hero = () => {
    return (
        <section className="min-h-screen hero">
            <CustomMotion>
                <div className="flex-col px-5 hero-content lg:flex-row-reverse">
                    <img src="/images/home/NEW-LOGO-alpha.gif" alt="" />
                    <div>
                        <h1 className="text-6xl font-bold sm:text-7xl">
                            Өндөр чанарыг Бодит үнээр
                        </h1>
                        <p className="py-12 text-[#B2B2B2]">
                            “Гурван Бухат Групп” ХХК нь салбартаа 13 жилийн
                            туршлагатай Үндэсний бүтээн байгуулагч групп компани
                            юм.
                        </p>
                    </div>
                </div>
            </CustomMotion>
        </section>
    );
};

export default Hero;
