import { Outlet } from "react-router-dom";
import ChatBox from "./chatBox";

const Layout = () => {
  return (
    <>
      <ChatBox />
      <Outlet />
    </>
  );
};

export default Layout;
