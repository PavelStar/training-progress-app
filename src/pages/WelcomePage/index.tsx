import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);
const CLASS_NAME = "WelcomePage";

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/auth");
  };

  return (
    <div className={cx(CLASS_NAME)}>
      <p>welcome page</p>
      <a onClick={handleClick}>начать</a>
    </div>
  );
};

export default WelcomePage;
