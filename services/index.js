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
  try {
    const result = await request(graphqlAPI, query);

    return result.postsConnection.edges;
  } catch (error) {
    console.log(error);
  }
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
  try {
    const result = await request(graphqlAPI, query);
    return result.posts;
  } catch (error) {
    console.log(error);
  }
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
  try {
    const result = await request(graphqlAPI, query);
    return result.posts;
  } catch (error) {
    console.log(error);
  }
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
  try {
    const result = await request(graphqlAPI, query);
    return result.categories;
  } catch (error) {
    console.log(error);
  }
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
  try {
    const result = await request(graphqlAPI, query, { slug });
    return result.post;
  } catch (error) {
    console.log(error);
  }
};

export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        name
        comment
        createdAt
      }
    }
  `;
  try {
    const result = await request(graphqlAPI, query, { slug });
    return result.comments;
  } catch (error) {
    console.log(error);
  }
};
