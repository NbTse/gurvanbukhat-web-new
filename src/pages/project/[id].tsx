import type { NextPage } from "next";

import CustomMotion from "@/components/common/custom-motion";

const NewsRead: NextPage = () => {
    return (
        <section className="container pt-32 pb-20 text-center pt">
            <CustomMotion>
                <h4 className="section-heading">
                    ҮХХ/Зах зээлийн сүүлийн үеийн судалгаа, дүн шинжилгээ тойм
                </h4>
            </CustomMotion>
        </section>
    );
};

export default NewsRead;
