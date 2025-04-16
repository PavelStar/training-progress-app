import { FC } from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);
const CLASS_NAME = "AuthPage";

const AuthPage = () => {
  return (
    <div className={cx(CLASS_NAME)}>
      <p>AuthPage</p>
    </div>
  );
};

export default AuthPage;
