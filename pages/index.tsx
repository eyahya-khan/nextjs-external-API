import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";
import Footer from "../components/footer";
import Header from "../components/header";
import Title from "../components/Title";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Title>Welcome</Title>
      <Head>
        <title>{siteTitle}</title>
        {/* <title>Welcome</title> */}
      </Head>
      <section className={utilStyles.headingMd}>
        <Header />
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog from file system</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className={utilStyles.headingLg}>
          Data fetching from external API
        </h2>
        <Link href="./externaldata">Click here .....</Link>
        {/* external api*/}
        {/* <ul>
          {posts.map((post) => (
            <li>Title: {post.title}</li>
          ))}
        </ul> */}
      </section>
      <Footer />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  // external api
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const posts = await res.json();
  return {
    props: {
      allPostsData,
      // posts,
    },
  };
};
