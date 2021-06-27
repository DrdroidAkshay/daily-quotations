import React from "react";
import Styles from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <React.Fragment>
      <MainNavigation />
      <main className={Styles.main}>{props.children}</main>
    </React.Fragment>
  );
};
export default Layout;
