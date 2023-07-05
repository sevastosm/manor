import { gql } from "@apollo/client";
import client from "../apollo-client/apollo-client";

export const menusQuery = gql`
  {
    menus {
      id
      name
      url
    }
  }
`;

export const studioQuery = gql`
  {
    studio(where: { id: "claasv1ya9xck0amfr4w93s3l" }) {
      email
      adress
      id
      instagram
      promoVideo
      publishedAt
      shortDescription
      vimeo
      title_site
      description_site
      textCareers {
        html
      }
      description {
        html
      }
      textClients {
        html
      }
    }
  }
`;

export const opporrunitiesQuery = gql`
  {
    opporrunities_open {
      id
      name
      description {
        html
        raw
      }
    }
  }
`;

export const projectsQuery = gql`
  {
    projects_manor(orderBy: sort_ASC, first: 50) {
      id
      projectName
      image {
        id
        fileName
        url
      }
      sort
      vimeoUrl
      shortDescription
      gifMainPage {
        fileName
        id
        url
        width
        mimeType
      }
    }
  }
`;

export const oneProjectQuery = (params) => gql`{
    projects(where: {id: "${params.id}"}) {
        createdAt
        id
        gallery_image(first:50) {
          id
          typeOfGallery
          galleryImage {
            id
            url
            width
            mimeType
            fileName
            height
            createdAt
          }
        }
        vimeoUrl
        projectName
        shortDescription
        description {
            html
            markdown
            raw
            text
          }
      }
}`;

export const clientsQuery = gql`
  {
    clients(first: 50) {
      logo {
        url
        id
      }
    }
  }
`;

export const makeQuery = async (queryString) => {
  const { data } = await client.query({
    query: queryString,
  });
  return data;
};
