// import { useEffect, useRef, useState } from "react";
import type { NextPage } from "next";
import { Header, Profile } from "../components";
// import Head from "next/head";
// import styles from "../styles/Home.module.css";
import { Post } from "../models";

interface HomeProps {
  posts: Post[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <div className="w-full flex justify-center items-center my-10">
      <div className="w-1/2">
        <Header />
        <Profile />
      </div>
    </div>
  );
};

export function getStaticProps() {
  // try {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const posts = await response.json();
  // } catch (error) {
  //   console.log(error);
  // }

  return {
    props: {
      posts: [
        {
          userId: 1,
          id: 1,
          title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        },
      ],
    },
  };
}

export default Home;
