import { FC } from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);
const CLASS_NAME = "ProgramPage";

const ProgramPage = () => {
  return (
    <div className={cx(CLASS_NAME)}>
      <p>ProgramPage</p>
    </div>
  );
};

export default ProgramPage;
