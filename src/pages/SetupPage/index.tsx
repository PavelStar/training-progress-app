import { FC } from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);
const CLASS_NAME = "SetupPage";

const SetupPage = () => {
  return (
    <div className={cx(CLASS_NAME)}>
      <p>SetupPage</p>
    </div>
  );
};

export default SetupPage;
