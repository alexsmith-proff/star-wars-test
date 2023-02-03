import { FC } from "react";
import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header";

interface LayoutProps { }

const Layout: FC<LayoutProps> = () => {
    return (
        <>
           <Header />
           <Outlet />
        </>
    );
}

export default Layout;
