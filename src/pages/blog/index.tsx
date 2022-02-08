import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/Layout";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map(({ frontmatter: { title, date }, id, slug }) => (
        <article key={id}>
          <h2>
            <Link to={`/blog/${slug}`}>{title}</Link>
          </h2>
          <p>Posted: {date}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        parent {
          ... on File {
            modifiedTime(formatString: "MMMM D, YYYY")
          }
        }
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
