import { FC, ReactNode } from "react";
import { Header } from "./Header";

interface Props {
  children: ReactNode;
}

export const AppLayout: FC<Props> = ({ children }) => {
  return (
    <div className="w-full flex justify-center items-center py-10">
      <div className="w-1/2">
        <Header className="mb-8" />
        {children}
      </div>
    </div>
  );
};
