import type { NextPage } from "next";

import Hero from "@/components/home/hero";
import Activity from "@/components/home/activity";
import Statistic from "@/components/home/statistic";
import Project from "@/components/home/project";
import Company from "@/components/home/company";
import News from "@/components/home/news";
import Join from "@/components/home/join";

const Home: NextPage = () => {
    return (
        <>
            <Hero />
            <Activity />
            <Statistic />
            <Project />
            <Company />
            <News />
            <Join />
        </>
    );
};

export default Home;
