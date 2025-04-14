import { FC } from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);
const CLASS_NAME = "section";

type SectionProps = {
  tag?: SectionTag;
  children: React.ReactNode;
  theme?: "dark" | "light";
  size?: "large" | "medium" | "small";
  className?: string;
};

type SectionTag = "section" | "header" | "footer";

const Section: FC<SectionProps> = ({
  children,
  tag = "section",
  className = "",
}) => {
  const Tag = `${tag}` as SectionTag;

  console.log(styles);

  return (
    <Tag className={cx(CLASS_NAME, className)}>
      <div className={cx(`${CLASS_NAME}__wrapper`)}>{children}</div>
    </Tag>
  );
};

export default Section;
