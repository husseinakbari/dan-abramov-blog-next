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

  console.log(post.id);

  return (
    <Link href={`/posts/${post.id}`}>
      <div className={itemClassName}>
        <p className="font-black text-[1.75rem] mb-2">{post.title}</p>
        <p className="font-light text-xs">July 7, 2021 </p>
      </div>
    </Link>
  );
};
