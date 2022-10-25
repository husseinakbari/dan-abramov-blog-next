import type { NextPage } from "next";
import { AppLayout, Profile } from "../components";
import { PostList } from "../components/PostList";
import { Post } from "../models";

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

export async function getStaticProps() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    return {
      props: {
        error,
      },
    };
  }
}

export default Home;
