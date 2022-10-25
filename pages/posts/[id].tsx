import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { AppLayout } from "../../components";
import { Post } from "../../models";
import { getAllPost, getPost } from "../../services/postService";
import { getDate } from "../../utils/date";

interface Props {
  post: Post;
}

const PostDetail: NextPage<Props> = ({ post }) => {
  return (
    <AppLayout>
      <div className="flex flex-col">
        <h1 className="mb-2 text-black dark:text-white">{post.title}</h1>
        <p className="font-light text-normal mb-8 text-black dark:text-pink-100">{post.date}</p>
        <p className="text-black dark:text-white">{post.body}</p>
      </div>
    </AppLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPost();
  let paths = posts.map((post) => ({
    params: {
      id: post.id.toString(),
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const postId = (context.params?.id as string) || "";
  let post = await getPost(postId);
  post = {
    ...post,
    date: getDate(post.id),
  }

  return {
    props: {
      post,
    },
  };
};

export default PostDetail;
