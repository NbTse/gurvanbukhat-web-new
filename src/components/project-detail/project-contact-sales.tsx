export default function ProjectContactSales({ project }: any) {
    return (
        <>
            <section className="container my-10">
                <div className="max-w-full mx-auto md:max-w-xl bg-[#ffffff14] p-5 sm:p-10 rounded-lg">
                    <h4 className="mb-4 text-2xl font-bold text-center">
                        Борлуулалтын албатай холбогдох
                    </h4>

                    <form method="POST">
                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg text-white label-text">
                                    Таны нэр
                                </span>
                            </label>
                            <input
                                required
                                type="text"
                                name="name"
                                className="input input-bordered input-primary input-ghost"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg text-white label-text">
                                    Имэйл хаяг
                                </span>
                            </label>
                            <input
                                required
                                type="email"
                                name="name"
                                className="input input-bordered input-primary input-ghost"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg text-white label-text">
                                    Утас
                                </span>
                            </label>
                            <input
                                required
                                type="text"
                                name="phone"
                                className="input input-bordered input-primary input-ghost"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg text-white label-text">
                                    Сэтгэгдэл
                                </span>
                            </label>
                            <textarea
                                required
                                name="message"
                                className="h-24 textarea textarea-bordered textarea-primary textarea-ghost"
                            ></textarea>
                        </div>

                        <div className="mt-6 form-control">
                            <button className="btn btn-primary" type="submit">
                                Илгээх
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}
