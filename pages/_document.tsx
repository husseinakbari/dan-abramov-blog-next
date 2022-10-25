import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" dir="ltr" className="dark">
      <title>Overreacted</title>
      <Head />
      <body className="dark:bg-grey-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
