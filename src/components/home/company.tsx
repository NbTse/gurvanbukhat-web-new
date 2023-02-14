import Link from "next/link";

import CustomMotion from "@/components/common/custom-motion";

const Company = () => {
    return (
        <section className="container pt-40 text-center">
            <CustomMotion>
                <h4 className="section-heading">Салбар компаниуд</h4>
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
                    <Link href="#" className="">
                        <img
                            src="/images/branch-company/1.png"
                            className="mx-auto scale-75 opacity-image"
                            alt=""
                        />
                    </Link>
                    <Link href="#">
                        <img
                            src="/images/branch-company/2.png"
                            className="mx-auto scale-75 opacity-image"
                            alt=""
                        />
                    </Link>
                    <Link href="#">
                        <img
                            src="/images/branch-company/3.png"
                            className="mx-auto scale-75 opacity-image"
                            alt=""
                        />
                    </Link>
                    <Link href="#">
                        <img
                            src="/images/branch-company/4.png"
                            className="mx-auto scale-75 opacity-image"
                            alt=""
                        />
                    </Link>
                    <Link href="#">
                        <img
                            src="/images/branch-company/5.png"
                            className="mx-auto scale-75 opacity-image"
                            alt=""
                        />
                    </Link>
                    <Link href="#">
                        <img
                            src="/images/branch-company/6.png"
                            className="mx-auto scale-75 opacity-image"
                            alt=""
                        />
                    </Link>
                    <Link href="#">
                        <img
                            src="/images/branch-company/7.png"
                            className="mx-auto scale-75 opacity-image"
                            alt=""
                        />
                    </Link>
                    <Link href="#">
                        <img
                            src="/images/branch-company/8.png"
                            className="mx-auto scale-75 opacity-image"
                            alt=""
                        />
                    </Link>
                </div>
            </CustomMotion>
        </section>
    );
};

export default Company;
