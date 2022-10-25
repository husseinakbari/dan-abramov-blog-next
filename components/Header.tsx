import { FC } from "react";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";

import { ThemeToggle } from "./ThemeToggle";
import { RootState } from "../store";
import { toggleTheme } from "../store/themeSlice";

interface Props {
  className: string;
}

export const Header: FC<Props> = ({ className }) => {
  const theme = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();

  const containerCN = classNames(
    "flex flex-row justify-between items-center",
    className
  );

  return (
    <div className={containerCN}>
      <h1 className="text-3xl font-bold">Overreacted</h1>
      <ThemeToggle
        value={theme === "dark"}
        onChange={() => dispatch(toggleTheme())}
      />
    </div>
  );
};
