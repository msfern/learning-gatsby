import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const BlogPage = ({ data }) => {
  console.log(data);
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allFile.nodes.map((file, index) => (
        <p key={index}>{file.name}</p>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default BlogPage;
