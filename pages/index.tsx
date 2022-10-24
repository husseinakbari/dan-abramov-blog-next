// import { useEffect, useRef, useState } from "react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Header, Profile } from "../components";
import { PostList } from "../components/PostList";
// import Head from "next/head";
// import styles from "../styles/Home.module.css";
import { Post } from "../models";

interface HomeProps {
  posts: Post[];
}

const Home: NextPage<HomeProps> = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const getPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const posts = await response.json();
      setPosts(posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="w-full flex justify-center items-center my-10">
      <div className="w-1/2">
        <Header className="mb-8" />
        <Profile className="mb-20" />
        <PostList posts={posts} />
      </div>
    </div>
  );
};

// export function getStaticProps() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const posts = await response.json();
//   } catch (error) {
//     console.log(error);
//   }

//   return {
//     props: {
//       posts: [
//         {
//           userId: 1,
//           id: 1,
//           title:
//             "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//           body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//         },
//       ],
//     },
//   };
// }

export default Home;
