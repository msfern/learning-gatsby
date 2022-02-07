import React from "react";
import renderer from "react-test-renderer";
import Layout from "./Layout";
import * as Gatsby from "../../__mocks__/gatsby";

describe("Layout", () => {
  it("renders correctly", () => {
    const data = Gatsby.useStaticQuery.mockImplementation(() => ({
      site: {
        siteMetadata: {
          title: "My Title",
        },
      },
    }));

    const tree = renderer
      .create(
        <Layout pageTitle="Layout Test" data={data}>
          Children
        </Layout>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
