import React from "react";
import renderer from "react-test-renderer";
import * as Gatsby from "../../../__mocks__/gatsby";
import About from "../about";

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

describe("About", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<About />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
