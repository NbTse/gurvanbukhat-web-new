import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import CountUp from "react-countup";

import CustomMotion from "@/components/common/custom-motion";

const Statistic = () => {
    const particlesInit = useCallback(async (engine: any) => {
        await loadFull(engine);
    }, []);

    return (
        <div className="relative">
            <section className="container py-20 text-center">
                <CustomMotion>
                    <Particles
                        className="absolute top-0 left-0 w-full h-full"
                        init={particlesInit}
                        options={{
                            fpsLimit: 120,
                            interactivity: {
                                events: {
                                    onClick: {
                                        enable: true,
                                        mode: "push",
                                    },
                                    onHover: {
                                        enable: true,
                                        mode: "repulse",
                                    },
                                    resize: true,
                                },
                                modes: {
                                    push: {
                                        quantity: 4,
                                    },
                                    repulse: {
                                        distance: 200,
                                        duration: 0.4,
                                    },
                                },
                            },
                            particles: {
                                color: {
                                    value: "#ffffff",
                                },
                                links: {
                                    color: "#ffffff",
                                    distance: 150,
                                    enable: true,
                                    opacity: 0.5,
                                    width: 1,
                                },
                                collisions: {
                                    enable: true,
                                },
                                move: {
                                    direction: "none",
                                    enable: true,
                                    outModes: {
                                        default: "bounce",
                                    },
                                    random: false,
                                    speed: 2,
                                    straight: false,
                                },
                                number: {
                                    density: {
                                        enable: true,
                                        area: 800,
                                    },
                                    value: 80,
                                },
                                opacity: {
                                    value: 0.5,
                                },
                                shape: {
                                    type: "circle",
                                },
                                size: {
                                    value: { min: 1, max: 5 },
                                },
                            },
                            detectRetina: true,
                            fullScreen: { enable: false },
                        }}
                    />
                    <h4 className="section-heading">Тоон статистик</h4>

                    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                        <div>
                            <p className="text-stroke">
                                <CountUp
                                    enableScrollSpy={true}
                                    scrollSpyOnce={true}
                                    duration={2}
                                    className="counter"
                                    suffix="+"
                                    end={170}
                                />
                            </p>
                            <p>Нийт ажилтны тоо</p>
                        </div>
                        <div>
                            <p className="text-stroke">
                                <CountUp
                                    enableScrollSpy={true}
                                    scrollSpyOnce={true}
                                    duration={2}
                                    className="counter"
                                    suffix="+"
                                    end={5}
                                />
                            </p>
                            <p>Хэрэгжүүлж буй төслүүд</p>
                        </div>
                        <div>
                            <p className="text-stroke">
                                <CountUp
                                    enableScrollSpy={true}
                                    scrollSpyOnce={true}
                                    duration={2}
                                    className="hidden sm:block counter"
                                    suffix="+"
                                    end={100000}
                                />
                                <CountUp
                                    enableScrollSpy={true}
                                    scrollSpyOnce={true}
                                    duration={2}
                                    className="block sm:hidden counter"
                                    suffix="K+"
                                    end={100}
                                />
                            </p>
                            <p>Ашиглалтанд оруулсан мкв</p>
                        </div>
                        <div>
                            <p className="text-white text-stroke">
                                <CountUp
                                    enableScrollSpy={true}
                                    scrollSpyOnce={true}
                                    duration={2}
                                    className="counter"
                                    suffix="+"
                                    end={9}
                                />
                            </p>
                            <p>Салбар компаниуд</p>
                        </div>
                    </div>
                </CustomMotion>
            </section>
        </div>
    );
};

export default Statistic;
