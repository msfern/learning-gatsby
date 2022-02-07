import React from "react";
import renderer from "react-test-renderer";
import Layout from "./Layout";
import * as Gatsby from "../../__mocks__/gatsby";

describe("Layout", () => {
  it("renders correctly", () => {
    const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
    useStaticQuery.mockImplementation(() => ({
      site: {
        siteMetadata: {
          title: "My Title",
        },
      },
    }));
    const data = {
      site: {
        siteMetadata: {
          author: "Author",
        },
      },
    };
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
