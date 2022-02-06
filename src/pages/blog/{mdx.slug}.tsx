import { graphql } from "gatsby";
import * as React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/Layout";

const BlogPost = ({
  data: {
    mdx: { body, frontmatter },
  },
}) => {
  const image = getImage(frontmatter.hero_image);

  return (
    <Layout pageTitle={frontmatter.title}>
      <GatsbyImage image={image} alt={frontmatter.hero_image_alt} />
      <p>
        Photo Credit:{" "}
        <a href={frontmatter.hero_image_credit_link}>
          {frontmatter.hero_image_credit_text}
        </a>
      </p>
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
        hero_image_credit_text
        hero_image_credit_link
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;

export default BlogPost;
