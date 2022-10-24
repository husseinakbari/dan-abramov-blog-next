import { FC } from "react";
import { Post } from "../models";
import { PostItem } from "./PostItem";

interface Props {
  posts: Post[];
}

export const PostList: FC<Props> = ({ posts }) => {
  return (
    <div className="flex flex-col">
      {posts.map((post) => (
        <PostItem post={post} key={post.id} className="mb-12" />
      ))}
    </div>
  );
};
