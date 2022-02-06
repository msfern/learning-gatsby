import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/Layout";

const BlogPage = ({ data }) => {
  console.log(data);
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map(
        ({ parent, frontmatter: { title, date }, body, id }) => (
          <article key={id}>
            <h2>{title}</h2>
            <p>Posted: {date}</p>
            <MDXRenderer>{body}</MDXRenderer>
          </article>
        )
      )}
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
        body
        id
      }
    }
  }
`;

export default BlogPage;
