import Header from "../header";
import Foooter from "../footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Foooter />
    </>
  );
};

export default Layout;
