import type { NextPage } from "next";
import Link from "next/link";

import CustomMotion from "@/components/common/custom-motion";
import CustomCard from "@/components/common/custom-card";

const News: NextPage = () => {
    return (
        <section className="container pt-32 pb-20 text-center pt">
            <CustomMotion>
                <h4 className="section-heading">
                    ҮХХ/Зах зээлийн сүүлийн үеийн судалгаа, дүн шинжилгээ тойм
                </h4>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <Link href="#">
                        <CustomCard
                            name="Bankman-Fried Would Like to Talk With Musk About Twitter"
                            subname="2023-01-01"
                            imgSrc="/images/news/1.png"
                        />
                    </Link>
                    <Link href="#">
                        <CustomCard
                            name="Bankman-Fried Would Like to Talk With Musk About Twitter"
                            subname="2023-01-01"
                            imgSrc="/images/news/2.png"
                        />
                    </Link>
                    <Link href="#">
                        <CustomCard
                            name="Bankman-Fried Would Like to Talk With Musk About Twitter"
                            subname="2023-01-01"
                            imgSrc="/images/news/3.png"
                        />
                    </Link>
                </div>

                <h4 className="mt-10 section-heading">Мэдээ/Мэдээлэл</h4>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <Link href="#">
                        <CustomCard
                            name="Bankman-Fried Would Like to Talk With Musk About Twitter"
                            subname="2023-01-01"
                            imgSrc="/images/news/1.png"
                        />
                    </Link>
                    <Link href="#">
                        <CustomCard
                            name="Bankman-Fried Would Like to Talk With Musk About Twitter"
                            subname="2023-01-01"
                            imgSrc="/images/news/2.png"
                        />
                    </Link>
                    <Link href="#">
                        <CustomCard
                            name="Bankman-Fried Would Like to Talk With Musk About Twitter"
                            subname="2023-01-01"
                            imgSrc="/images/news/3.png"
                        />
                    </Link>
                </div>
            </CustomMotion>
        </section>
    );
};

export default News;
