import { GetStaticProps } from "next";

function Blog({
  posts,
}: {
  posts: {
    title: string;
    id: number;
    body: string;
  }[];
}) {
  return (
    <ul>
      {posts.map(({ id, title, body }) => (
        <li>
          ID: {id}
          <br />
          Title: {title}
          <br />
          Body: {body}
        </li>
      ))}
    </ul>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
