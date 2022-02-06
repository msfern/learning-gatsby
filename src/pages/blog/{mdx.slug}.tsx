import { graphql } from "gatsby";
import * as React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/Layout";

const BlogPost = ({
  data: {
    mdx: { body, frontmatter },
  },
}) => {
  return (
    <Layout pageTitle={frontmatter.title}>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;

export default BlogPost;
