import Link from "next/link";

import CustomMotion from "@/components/common/custom-motion";

const Project = () => {
    return (
        <section className="container lg:h-[620px] xl:h-[735px] 2xl:h-[850px] pt-20 text-center">
            <CustomMotion>
                <div>
                    <h4 className="section-heading">Төслүүд</h4>
                </div>
                <div className="relative flex">
                    <Link href="/project" className="block lg:hidden">
                        <img src="/images/project/mobile.png" alt="" />
                    </Link>
                    <div className="hidden lg:block">
                        <Link href="#">
                            <img
                                src="/images/project/florence.png"
                                alt=""
                                className="lg:w-[532px] lg:left-[132px] lg:top-[0px] xl:w-[664px] xl:left-[166px] xl:top-[0px] 2xl:w-[800px] 2xl:left-[200px] 2xl:top-[0px] home-project"
                            />
                        </Link>
                        <Link href="#">
                            <img
                                src="/images/project/ab.png"
                                alt=""
                                className="lg:w-[524px] lg:right-[0px] lg:top-[68px] xl:w-[748px] xl:right-[0px] xl:top-[84px] 2xl:w-[900px] 2xl:right-[0px] 2xl:top-[100px] home-project"
                            />
                        </Link>
                        <Link href="#">
                            <img
                                src="/images/project/lux.png"
                                alt=""
                                className="lg:w-[200px] lg:left-[0px] lg:top-[68px] xl:w-[250px] xl:left-[0px] xl:top-[84px] 2xl:w-[300px] 2xl:left-[0px] 2xl:top-[100px] home-project"
                            />
                        </Link>
                        <Link href="#b">
                            <img
                                src="/images/project/plus-apart.png"
                                alt=""
                                className="lg:w-[200px] lg:left-[166px] lg:top-[166px] xl:w-[250px] xl:left-[208px] xl:top-[208px] 2xl:w-[300px] 2xl:left-[250px] 2xl:top-[250px] home-project"
                            />
                        </Link>
                        <Link href="#">
                            <img
                                src="/images/project/plus-res.png"
                                alt=""
                                className="lg:w-[466px] lg:left-[364px] lg:top-[160px] xl:w-[582px] xl:left-[456px] xl:top-[200px] 2xl:w-[700px] 2xl:left-[550px] 2xl:top-[240px] home-project"
                            />
                        </Link>
                    </div>
                </div>
            </CustomMotion>
        </section>
    );
};

export default Project;
