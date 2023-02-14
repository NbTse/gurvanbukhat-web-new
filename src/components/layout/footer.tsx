import Link from "next/link";
import {
    TfiFacebook,
    TfiInstagram,
    TfiLinkedin,
    TfiTwitterAlt,
} from "react-icons/tfi";

const Footer = () => {
    return (
        <footer>
            <section className="py-20 text-center bg-[#ffffff14] border border-[#ffffff14]">
                <div className="container">
                    <div className="flex justify-center">
                        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
                            <h4 className="mb-3 section-heading">
                                Subscribe to our newsletter
                            </h4>
                            <form className="flex gap-6">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="w-full input input-ghost"
                                />
                                <button
                                    className={`btn btn-outline btn-primary`}
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
                        <div className="my-10">
                            <h3 className="footer-big-links">Бидний тухай</h3>
                            <ul>
                                <li>
                                    <Link
                                        href="/greeting"
                                        className="footer-links"
                                    >
                                        Ерөнхий захирлын мэндчилгээ
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/company-intro"
                                        className="footer-links"
                                    >
                                        Компанийн танилцуулга
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
                        <div className="my-10">
                            <h3 className="footer-big-links">Төслүүд</h3>
                            <ul>
                                <li>
                                    <Link
                                        href="/project/1"
                                        className="footer-links"
                                    >
                                        Арга билиг цогцолбор хотхон
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/project/2"
                                        className="footer-links"
                                    >
                                        Florence Residence
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/project/3"
                                        className="footer-links"
                                    >
                                        PLUS Residence
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/project/4"
                                        className="footer-links"
                                    >
                                        Plus Apartment
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/project/5"
                                        className="footer-links"
                                    >
                                        LUX 16 Apartment
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/project/6"
                                        className="footer-links"
                                    >
                                        Admiral Apartment
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/project/7"
                                        className="footer-links"
                                    >
                                        Dalanzadgad Apartment 2
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
                        <div className="my-10">
                            <h3 className="footer-big-links">
                                Тогтвортой хөгжил
                            </h3>
                            <ul>
                                <li>
                                    <Link href="#" className="footer-links">
                                        Бидний зарчим
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="footer-links">
                                        Бидний оролцоо
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="footer-links">
                                        Таны санал
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
                        <div className="my-10">
                            <h3 className="footer-big-links">Бусад</h3>
                            <ul>
                                <li>
                                    <Link
                                        href="/contact"
                                        className="footer-links"
                                    >
                                        Холбоо барих
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/question"
                                        className="footer-links"
                                    >
                                        Түгээмэл асуулт хариулт
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="footer-links">
                                        Хөрөнгө оруулалт
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/news" className="footer-links">
                                        Судалгаа, мэдээлэл
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="flex flex-col sm:flex-row gap-8 justify-between py-6 border-t border-[#6E7191]">
                    <Link href="/">
                        <img src="/logo.png" alt="logo" className="logo" />
                    </Link>

                    <ul className="flex items-center">
                        <li className="mx-2">
                            <a href="#" className="footer-icon">
                                <TfiFacebook />
                            </a>
                        </li>
                        <li className="mx-2">
                            <a href="#" className="footer-icon">
                                <TfiInstagram />
                            </a>
                        </li>
                        <li className="mx-2">
                            <a href="#" className="footer-icon">
                                <TfiLinkedin />
                            </a>
                        </li>
                        <li className="ml-2">
                            <a href="#" className="footer-icon">
                                <TfiTwitterAlt />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* <div className="flex justify-end">
                <img
                    src="/images/footer/bg.png"
                    alt="footer-bg"
                    className="hidden sm:block"
                />
                <img
                    src="/images/footer/mobile-bg.png "
                    alt="footer-bg"
                    className="block sm:hidden"
                />
            </div> */}
        </footer>
    );
};

export default Footer;
