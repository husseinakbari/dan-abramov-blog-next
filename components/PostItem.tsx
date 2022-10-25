import { FC } from "react";
import classNames from "classnames";

import { Post } from "../models";
import Link from "next/link";

interface Props {
  post: Post;
  className?: string;
}

export const PostItem: FC<Props> = ({ post, className }) => {
  const itemClassName = classNames("flex flex-col cursor-pointer", className);

  return (
    <Link href={`/posts/${post.id}`}>
      <div className={itemClassName}>
        <p className="font-black text-[1.75rem] mb-2 text-pink-500">{post.title}</p>
        <p className="font-normal text-xs text-black dark:text-pink-100">July 7, 2021 </p>
      </div>
    </Link>
  );
};
