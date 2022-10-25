import { FC, useEffect } from "react";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";

import { ThemeToggle } from "./ThemeToggle";
import { RootState } from "../store";
import { toggleTheme } from "../store/themeSlice";
import { useRouter } from "next/router";

interface Props {
  className: string;
}

export const Header: FC<Props> = ({ className }) => {
  const router = useRouter();
  const theme = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();
  
  const containerCN = classNames(
    "flex flex-row justify-between items-center",
    className,
    {
      "text-black dark:text-white": router.route === "/",
      "text-pink-100": router.route === "/posts/[id]",
    }
  );

  useEffect(() => {    
    document.documentElement.classList.replace("dark", theme)
  }, [])

  return (
    <div className={containerCN}>
      <h1 className="text-3xl font-bold">Overreacted</h1>
      <ThemeToggle
        mode={theme}
        onChange={() => dispatch(toggleTheme())}
      />
    </div>
  );
};
