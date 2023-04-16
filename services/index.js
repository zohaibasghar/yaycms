import { request, gql } from "graphql-request";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHQL_API;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
            author {
              id
              name
              photo {
                url
              }
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  console.log(result.postsConnection.edges)
  return result.postsConnection.edges;
};
