import classNames from "classnames/bind";
import styles from "./HeaderOnly.module.scss";
import { useContext, useEffect } from "react";
import { NavbarScrollContext } from "~/component/Context/NavbarScrollProvider";
import NavBar from "~/component/NavBar";
import { ScrolledPastContext } from "~/component/Context/ScrolledPastProvder";

const cx = classNames.bind(styles);

function HeaderOnly({ children }) {
  return (
    <div className={cx("wrapper")}>
      havbar
      <div className={cx("container")}>{children}</div>
    </div>
  );
}

export default HeaderOnly;
