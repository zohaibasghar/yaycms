import { request, gql } from "graphql-request";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHQL_API;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              name
              photo {
                url
              }
              description
            }
            categories {
              name
              slug
            }
            createdAt
            excerpt
            featuredPost
            id
            slug
            title
            featuredImage {
              url
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};
export const getRecentPosts = async () => {
  const query = gql`
    query GetRecentPosts {
      posts(orderBy: createdAt_ASC, last: 3) {
        title
        createdAt
        slug
        featuredImage {
          url
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.posts;
};

export const getSimilerPosts = async () => {
  const query = gql`
  query GetSimilerPosts($slug:String!, $categories:[String!]) {
  posts(where:slug_not:$slug,AND:{categories_some:{slug_in:$categories}}) { 
  title
  createdAt
  slug
  featuredImage{
  url}
   }}`;
  const result = await request(graphqlAPI, query);
  return result.posts;
};

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.categories;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        author {
          name
          description
          photo {
            url
          }
        }
        categories {
          name
          slug
        }
        excerpt
        createdAt
        featuredPost
        slug
        title
        featuredImage {
          url
        }
        content {
          raw
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug });
  return result.post;
};
getPostDetails("react-ui-testing");
