import type { GetStaticProps, NextPage } from "next";
import { AppLayout, Profile } from "../components";
import { PostList } from "../components/PostList";
import { Post } from "../models";
import { getAllPost } from "../services/postService";
import { getDate } from "../utils/date";

interface HomeProps {
  posts: Post[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <AppLayout>
      <Profile className="mb-20" />
      <PostList posts={posts} />
    </AppLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    let posts = await (await getAllPost()).reverse();
    posts = posts.map((post) => {
      const postId = post.id;
      return {
        ...post,
        date: getDate(postId),
      };
    });

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    return {
      props: {
        error,
        posts: [],
      },
    };
  }
};

export default Home;
