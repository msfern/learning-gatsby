import React from "react";
import renderer from "react-test-renderer";
import Layout from "../Layout";
import * as Gatsby from "../../../__mocks__/gatsby";

beforeEach(() => {
  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
  useStaticQuery.mockImplementationOnce(() => ({
    site: {
      siteMetadata: {
        title: "My Title",
      },
    },
  }));
});

describe("Layout", () => {
  it("renders correctly", () => {
    const data = {
      site: {
        siteMetadata: {
          title: "Gatsby Starter Blog",
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
