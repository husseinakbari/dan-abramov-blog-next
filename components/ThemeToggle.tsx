import { FC } from "react";
import classNames from "classnames";

import styles from "../styles/Toggle.module.css";
import { ThemeState } from "../models";

interface Props extends ThemeState {
  onChange: () => void;
}

export const ThemeToggle: FC<Props> = ({ mode, onChange }) => {
  const toggleCheckCN = classNames(styles.wrg_toggle_check, {
    "!opacity-100": mode === "dark",
  });

  const toggleUncheckCN = classNames(styles.wrg_toggle_uncheck, {
    "!opacity-0": mode === "dark",
  });

  const toggleCircleCN = classNames(styles.wrg_toggle_circle, {
    "!left-7": mode === "dark",
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
