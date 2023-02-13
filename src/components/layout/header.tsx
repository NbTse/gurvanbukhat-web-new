import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    const onScroll = useCallback(() => {
        setSticky(window.pageYOffset > 0);
    }, []);

    const onToggle = () => {
        setToggle((prevState) => !prevState);
    };

    return (
        <header className="relative">
            <div
                className={`fixed top-0 left-0 z-[999] w-full duration-300 navigation${
                    sticky ? ` sticky` : ``
                }`}
            >
                <div className="container">
                    <nav className="relative flex items-center justify-between py-5 duration-300">
                        <Link href="/">
                            <img src="/logo.png" alt="logo" className="logo" />
                        </Link>
                        <button
                            className={`block navbar-toggler focus:outline-none lg:hidden${
                                toggle ? ` active` : ``
                            }`}
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            onClick={onToggle}
                        >
                            <span className="toggler-icon"></span>
                            <span className="toggler-icon"></span>
                            <span className="toggler-icon"></span>
                        </button>

                        <div
                            className={`absolute left-0 z-20 w-full lg:w-auto hidden pl-4 py-3 duration-300 bg-[#000000] rounded-b-xl lg:bg-transparent shadow collapse navbar-collapse lg:block top-full mt-full lg:static lg:shadow-none${
                                toggle ? ` show` : ``
                            }`}
                        >
                            <ul className="items-center justify-center mr-auto navbar-nav lg:flex">
                                <li className="nav-item">
                                    <Link className="header-link" href="#">
                                        Бидний тухай
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="header-link"
                                        href="/project"
                                    >
                                        Төслүүд
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="header-link" href="#">
                                        Тогтвортой хөгжил
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="header-link" href="#">
                                        Хөрөнгө оруулалт
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="!pr-0 header-link"
                                        href="/news"
                                    >
                                        Судалгаа, Мэдээлэл
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
