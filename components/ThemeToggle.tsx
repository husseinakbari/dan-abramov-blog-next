import { FC } from "react";
import classNames from "classnames";

import styles from "../styles/Toggle.module.css";

interface Props {
    value: boolean;
    onChange: () => void
}

export const ThemeToggle: FC<Props> = ({
    value = false,
    onChange
}) => {

  const toggleCheckCN = classNames(styles.wrg_toggle_check, {
    "!opacity-100": value,
  });

  const toggleUncheckCN = classNames(styles.wrg_toggle_uncheck, {
    "!opacity-0": value,
  });

  const toggleCircleCN = classNames(styles.wrg_toggle_circle, {
    "!left-7": value,
  });

  return (
    <div className={styles.wrg_toggle} onClick={onChange}>
      <div className={styles.wrg_toggle_container}>
        <div className={toggleCheckCN}>
          <span>🌙</span>
        </div>
        <div className={toggleUncheckCN}>
          <span>☀️</span>
        </div>
      </div>
      <div className={toggleCircleCN}></div>
      <input
        className={styles.wrg_toggle_input}
        type="checkbox"
        aria-label="Toggle Button"
      />
    </div>
  );
};
