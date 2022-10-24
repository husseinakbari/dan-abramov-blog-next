import { FC, useState } from "react";
import classNames from "classnames";

import { ThemeToggle } from "./ThemeToggle";

interface Props {
  className: string;
}

export const Header: FC<Props> = ({ className }) => {
  const [toggle, setToggle] = useState(false);

  const containerCN = classNames(
    "flex flex-row justify-between items-center",
    className
  );

  return (
    <div className={containerCN}>
      <h1 className="text-3xl font-bold">Overreacted</h1>
      <ThemeToggle value={toggle} onChange={() => setToggle(!toggle)} />
    </div>
  );
};
