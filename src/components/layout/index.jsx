import {Outlet} from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer";

const Layout = () => {
    return(
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>

            {/*done*/}
        </>

    )


}

export default Layout;