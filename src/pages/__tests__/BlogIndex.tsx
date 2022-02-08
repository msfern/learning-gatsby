import React from "react";
import renderer from "react-test-renderer";
import * as Gatsby from "../../../__mocks__/gatsby";
import BlogIndex from "../blog";

beforeEach(() => {
  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
  useStaticQuery.mockImplementationOnce(() => ({
    site: {
      siteMetadata: {
        title: "My Title",
      },
    },
    allMdx: {
      nodes: [
        {
          parent: {
            modifiedTime: "February 6, 2022",
          },
          frontmatter: {
            date: "February 1, 2022",
            title: "My first job abroad!",
          },
          id: "a7670ea3-30e8-578a-af1b-36362fbf28fe",
          slug: "job-abroad/",
        },
        {
          parent: {
            modifiedTime: "February 6, 2022",
          },
          frontmatter: {
            date: "December 25, 2021",
            title: "Mental Health",
          },
          id: "d56ad04a-8e60-56f7-9718-b51e489a47a7",
          slug: "mental-health/",
        },
        {
          parent: {
            modifiedTime: "February 6, 2022",
          },
          frontmatter: {
            date: "October 24, 2021",
            title: "My Guinea Pigs",
          },
          id: "6ffa82b7-b83b-5968-ae87-315e6b8b1fd1",
          slug: "my-guinea-pigs/",
        },
      ],
    },
  }));
});

describe("Blog", () => {
  it("renders correctly", () => {
    const data = {
      site: {
        siteMetadata: {
          title: "My Title",
        },
      },
      allMdx: {
        nodes: [
          {
            parent: {
              modifiedTime: "February 6, 2022",
            },
            frontmatter: {
              date: "February 1, 2022",
              title: "My first job abroad!",
            },
            id: "a7670ea3-30e8-578a-af1b-36362fbf28fe",
            slug: "job-abroad/",
          },
          {
            parent: {
              modifiedTime: "February 6, 2022",
            },
            frontmatter: {
              date: "December 25, 2021",
              title: "Mental Health",
            },
            id: "d56ad04a-8e60-56f7-9718-b51e489a47a7",
            slug: "mental-health/",
          },
          {
            parent: {
              modifiedTime: "February 6, 2022",
            },
            frontmatter: {
              date: "October 24, 2021",
              title: "My Guinea Pigs",
            },
            id: "6ffa82b7-b83b-5968-ae87-315e6b8b1fd1",
            slug: "my-guinea-pigs/",
          },
        ],
      },
    };

    const tree = renderer.create(<BlogIndex data={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
