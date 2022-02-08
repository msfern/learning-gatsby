import React from "react";
import renderer from "react-test-renderer";
import * as Gatsby from "../../../__mocks__/gatsby";
import Index from "../index";

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

describe("Index", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Index />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
