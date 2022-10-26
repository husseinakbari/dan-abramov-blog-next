import Image from "next/image";
import { FC } from "react";
import classNames from "classnames";

import ProfilePic from "../public/profile-pic.jpeg";

interface Props {
  className?: string;
}

export const Profile: FC<Props> = ({ className }) => {
  const containerCN = classNames("flex flex-row items-center", className);

  return (
    <div className={containerCN}>
      <div className="w-14 h-14 rounded-full overflow-hidden mr-3">
        <Image src={ProfilePic} />
      </div>
      <div className="flex flex-col text-black dark:text-pink-100">
        <div className="flex flex-row items-center">
          <p>Personal blog by </p>
          <a
            href="https://mobile.twitter.com/dan_abramov"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 underline hover:no-underline text-pink-500"
          >
            Dan Abramov
          </a>
        </div>
        <p>I explain with words and code.</p>
      </div>
    </div>
  );
};
