import { withRouter } from "next/router";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }: any) => {
    return (
        <div className="overflow-hidden bg-no-repeat bg-cover bg-site">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default withRouter(Layout);
