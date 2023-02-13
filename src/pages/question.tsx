import type { NextPage } from "next";

import CustomMotion from "@/components/common/custom-motion";

const Question: NextPage = () => {
    return (
        <section className="container pt-32 pb-20 text-center pt">
            <CustomMotion>
                <h4 className="section-heading">Түгээмэл асуулт хариулт</h4>

                <div className="grid gap-5 grid-cols">
                    <div className="border collapse collapse-arrow border-base-300 bg-[#ffffff14] rounded-lg">
                        <input type="checkbox" className="peer" />
                        <div className="text-left collapse-title">
                            Хэрхэн хөрөнгө оруулалт хийх вэ?
                        </div>
                        <div className="text-justify collapse-content">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </div>
                    </div>
                </div>
            </CustomMotion>
        </section>
    );
};

export default Question;
