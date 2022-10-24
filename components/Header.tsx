import { FC, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export const Header: FC = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Overreacted</h1>
        <ThemeToggle value={toggle} onChange={() => setToggle(!toggle)} />
      </div>
    </div>
  );
};
