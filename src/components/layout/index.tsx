import { withRouter } from "next/router";

import Header from "./header";
import Footer from "./footer";
import CustomMotion from "@/components/common/custom-motion";

const Layout = ({ children }: any) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default withRouter(Layout);
