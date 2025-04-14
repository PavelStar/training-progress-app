import { FC } from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);
const CLASS_NAME = "title";

type TitleProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  theme?: "dark" | "light";
  size?: "large" | "medium" | "small";
  className?: string;
};

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const Title: FC<TitleProps> = ({
  level = 1,
  children,
  size = "medium",
  theme = "light",
  className = "",
}) => {
  const Tag = `h${level}` as HeadingTag;

  return (
    <Tag
      className={cx(CLASS_NAME, {
        [`${CLASS_NAME}__theme_${theme}`]: theme,
        [`${CLASS_NAME}__size_${size}`]: size,
        [className]: !!className,
      })}
    >
      {children}
    </Tag>
  );
};

export default Title;
