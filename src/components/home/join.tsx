import CustomMotion from "@/components/common/custom-motion";

const Join = () => {
    return (
        <section className="container">
            <CustomMotion>
                <div className="shadow-box">
                    <div className="flex flex-col items-center justify-center mx-5">
                        <h4 className="section-heading">Join Our Team!</h4>
                        <div className="mb-10 text-center text-white">
                            Want to be part of a dedicated team driven by
                            promoting and protecting the health of people and
                            communities? Check out our open positions.
                        </div>
                        <a
                            href="https://www.zangia.mn"
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-outline btn-primary"
                        >
                            See Open Positions
                        </a>
                    </div>
                </div>
            </CustomMotion>
        </section>
    );
};

export default Join;
